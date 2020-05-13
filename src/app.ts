import express from "express";
import morgan from "morgan";

// initialitations
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes

export default app;
