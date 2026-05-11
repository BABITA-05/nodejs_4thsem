// const express = require("express");
// const { initialRouteHandler, getAllUsersHandler } = require("./handlers");

// const app = express();
import express from "express";
import { initialRouteHandler, getAllUsersHandler } from "./handlers.js";
let app = express()

app.get("/", initialRouteHandler);
app.get("/users", getAllUsersHandler)

app.listen(8080, ()=>{
    console.log("server started on port 8080")
});
