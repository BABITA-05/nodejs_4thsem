import {Pool} from "pg"
import dotenv from "dotenv"
//loading env
dotenv.config()

//creating new pool for database connection


let pool = new Pool({
    host: process.env.POSTGRES_HOST,
    port:process.env.POSTGRES_PORT,
    user:process.env.POSTGRES_USER,
    password:process.env.POSTGRES_PASSWORD,
    database:process.env.POSTGRES_DB
})
export {pool}