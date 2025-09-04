import express from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";
import { serve } from "inngest/express";
import { functions, inngest } from "./config/inngest.js";

const app = express();

//access req body
app.use((req, res, next) => {
  if (req.path.startsWith("/api/inngest")) {
    return next();
  }
  express.json()(req, res, next);
});

//req.auth will be avalilable in the req object
app.use(clerkMiddleware());

//allow to use ingest functions
app.use("/api/inngest", serve({ client: inngest, functions }));

app.get("/", (req, res) => {
  res.send("Hello World");
});
console.log(
  "INGEST_SIGNING_KEY:",
  process.env.INGEST_SIGNING_KEY?.slice(0, 10)
);

const startServer = async () => {
  try {
    await connectDB();
    if (ENV.NODE_ENV !== "production") {
      app.listen(ENV.PORT, () => {
        console.log(`Server started on port ${ENV.PORT}`);
        connectDB();
      });
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

startServer();

export default app;
