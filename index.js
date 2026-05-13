// const express = require("express");
// const { initialRouteHandler, getAllUsersHandler } = require("./handlers");

// const app = express();
import express from "express";
import { initialRouteHandler, getAllUsersHandler, handlerCreateUser, handlerCalculate } from "./handlers.js";
let app = express()

//middleware for body parse so the json body gets converted
app.use(express.json())

//creating route
app.get("/", initialRouteHandler);
app.get("/users", getAllUsersHandler)

app.post(
    "/user/create", handlerCreateUser
)

app.post(
    "/calculate", handlerCalculate
)


//creating server
app.listen(8080, ()=>{
    console.log("server started on port 8080")
});
