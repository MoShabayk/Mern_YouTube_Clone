import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import usersRoutes from "./routes/users.js"
import videosRoutes from "./routes/videos.js"
import commentsRoutes from "./routes/comments.js"
import authRoutes from "./routes/auth.js"
import cookieParser from "cookie-parser"



const app = express();
dotenv.config();

const connect=() =>{
    mongoose.connect(process.env.MONGO)
    .then(()=>{
        console.log("Connected to DB");
    })
    .catch((err) => {
        throw err;
    });
};

app.use(cookieParser())
app.use(express.json())
app.use("/api/auth",authRoutes)
app.use("/api/users",usersRoutes)
app.use("/api/videos",videosRoutes)
app.use("/api/comments",commentsRoutes)

//create error handling middleware
app.use((err,req,res,next)=>{
    //get the status code from the error object, or default to 500
    const status = err.status ||500;
    //get the message from the error object, or default to "Something went wrong!"
    const message =err.message || "Something went wrong!";
    //return the response with JSON and the error message
    return res.status(status).json({
        success: false,
        status: status,
        message:message
    })
})

app.listen(8800,()=>{
    connect()
    console.log("Connected!");
});