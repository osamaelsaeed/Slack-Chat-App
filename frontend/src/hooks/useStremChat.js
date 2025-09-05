import { Component, useEffect, useState } from "react";
import { StreamChat } from "stream-chat";
import { useUser } from "@clerk/clerk-react";
import { useQuery } from "@tanstack/react-query";
import { getStreamToken } from "../lib/api";
import * as Sentry from "@sentry/react";

//this custom hook is to connect the current user to the stream api
const STREAM_API_KEY = import.meta.env.VITE_STREAM_API_KEY;

export const useStreamChat = () => {
  const { user } = useUser();
  const { chatClient, setChatClient } = useState(null);

  //fetch stream token with tanstack query
  const {
    data: tokenData,
    isLoading: tokenLoading,
    error: tokenError,
  } = useQuery({
    queryKey: ["streamToken"],
    queryFn: getStreamToken,
    enabled: !!user?.id,
  });

  //init stream chat client
  useEffect(() => {
    const initChat = async () => {
      if (!tokenData?.token || !user) return;
      try {
        //client is an instance to talk to stream
        const client = StreamChat.getInstance(STREAM_API_KEY);
        await client.connectUser({
          id: user.id,
          name: user.fullName,
          image: user.imageUrl,
        });
        setChatClient(client);
      } catch (error) {
        console.log("Error connecting to stream", error);
        Sentry.captureException(error, {
          tags: {
            Component: useStreamChat,
            extra: {
              context: "stream_chat_connection",
              userId: user?.id,
              streamApiKey: STREAM_API_KEY ? "present" : "missing",
            },
          },
        });
      }
    };
    initChat();
    //clean up
    if (chatClient) chatClient.disconnectUser();
  }, [tokenData, user, chatClient]);

  return { chatClient, isLoading: tokenLoading, error: tokenError };
};
