import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";

//Other Packages
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
// Initialize app
const port = process.env.PORT || 5000;
const app = express();

//Routers
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

//Other Packages
app.use(morgan("dev"));
//For parsing JSON data
app.use(express.json());
//For parsing Form data
app.use(express.urlencoded({ extended: true }));
//For parsing Cookie data
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend's origin
    credentials: true, // Enable credentials (cookies, authorization headers)
  })
);

//Routes
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use(notFound);
app.use(errorHandler);

//server listening
const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log("server listening on port " + port);
    });
  } catch (error) {
    console.log("Error connecting Database");
  }
};

start();
