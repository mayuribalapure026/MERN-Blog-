import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "../api/routes/user.routes.js";
import { signup } from "./controllers/auth.controllers.js";
const app=express();
dotenv.config();

app.use(express.json());
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Mongodb is connected");
})
.catch((err)=>{
    console.log(err);
})

app.listen(3000,()=>{
    console.log("Server listening on port 3000");
})
app.use("/api/user",userRoutes);
app.use("/api/auth",signup);
