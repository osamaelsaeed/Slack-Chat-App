import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import * as Sentry from "@sentry/react";

const SentryRoutes = Sentry.withSentryReactRouterV7Routing(Routes);
const App = () => {
  return (
    <>
      <SignedIn>
        <SentryRoutes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/auth" element={<Navigate to={"/"} replace />}></Route>
        </SentryRoutes>
      </SignedIn>
      <SignedOut>
        <SentryRoutes>
          <Route path="/auth" element={<AuthPage />}></Route>
          <Route path="*" element={<Navigate to={"/auth"} replace />}></Route>
        </SentryRoutes>
      </SignedOut>
    </>
  );
};

export default App;
