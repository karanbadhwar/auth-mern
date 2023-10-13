import express from "express";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

//Routers
import userRoutes from "./routes/userRoutes.js";

//Routes
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

//server listening
app.listen(port, () => {
  console.log("server listening on port " + port);
});
