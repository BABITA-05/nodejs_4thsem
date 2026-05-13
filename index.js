// const express = require("express");
// const { initialRouteHandler, getAllUsersHandler } = require("./handlers");

// const app = express();
import express from "express";
import dotenv from "dotenv"
import { initialRouteHandler, getAllUsersHandler, handlerCreateUser, handlerCalculate } from "./handlers.js";

//loading .env
dotenv.config()
let app = express()

//middleware for body parse so the json body gets converted
app.use(express.json())

//getting port from env
let PORT = process.env.PORT

//creating route
app.get("/", initialRouteHandler);
app.get("/users", getAllUsersHandler)

app.post(
    "/user/create", handlerCreateUser
)

app.post(
    "/calculate", handlerCalculate
)

app.get(
    "/multiply", (req, res)=>{
        let data = req.body

        let a = data.a
        let b = data.b
        let result = a * b
        let resData = {
            "message":"multiplied successfully",
            data: result
        }
        res.status(200).json(resData)
    }
)


//creating server
app.listen(8080, ()=>{
    console.log("server started on port 8080")
});
