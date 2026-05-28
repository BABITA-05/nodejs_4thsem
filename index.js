// const express = require("express");
// const { initialRouteHandler, getAllUsersHandler } = require("./handlers");

// const app = express();
import express from "express";
import dotenv from "dotenv"
import { initialRouteHandler, getAllUsersHandler, handlerCreateUser, handlerCalculate } from "./handlers.js";
import { CreateUser, DeleteUser, GetAllUsers, GetUserById, UpdateUser } from "./controller/user_handler.js";
import { pool } from "./database/db.js";

//loading .env
dotenv.config()

let app = express()

//middleware for body parse so the json body gets converted
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//getting port from env
let PORT = process.env.PORT || 8080

//creating route
app.get(
    "/",
    async ( req, res)=>{
        let result = await pool.query('SELECT * FROM users')
        console.log("All users:", result.rows)
        res.json({
            message:"successfully fetched all users",
            data:result.rows
        })
    } 

);

//users route
app.get("/users", GetAllUsers)
app.get("/user/:id", GetUserById)
app.post("/users", CreateUser)
app.put("/user/:id", UpdateUser)
app.delete("/user/:id", DeleteUser)



// app.get("/users", getAllUsersHandler)

// app.post(
//     "/user/create", handlerCreateUser
// )

// app.post(
//     "/calculate", handlerCalculate
// )

// app.get(
//     "/multiply", (req, res)=>{
//         let data = req.body

//         let a = data.a
//         let b = data.b
//         let result = a * b
//         let resData = {
//             "message":"multiplied successfully",
//             data: result
//         }
//         res.status(200).json(resData)
//     }
// )


//creating server
app.listen(PORT, ()=>{
    console.log(`server started to listen at localhost: ${PORT}`)
});
