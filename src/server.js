import express from "express";
import dotenv from "dotenv";
import appRouter from "./routes";
import { errorHandler } from "./errors";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/core-banking", appRouter);
app.all("*", (req, res, next) => res.json({ ok: true }));

// Catch errors
app.use(errorHandler);

app.listen(4000, () =>
  console.log("Server listening for incoming requests...")
);
