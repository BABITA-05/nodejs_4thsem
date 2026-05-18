import AllUsers from "../data/users_data.js"

let GetAllUsers = (req, res)=>{
    let resData = {
        "message":"All users fetched successfully",
        "data": AllUsers,
    }
    res.status(200).json(resData)

}
let GetUserById = (req, res)=>{
    //getting parameters of url from request
    let params = req.params
    //params is an object so getting id from the params object
    let id = params.id
    console.log("id: ", id)

}
let CreateUser = (req, res)=>{
    
}
let UpdateUser= (req, res)=>{
    
}
let DeleteUser = (req, res)=>{
    
}
export {GetAllUsers, GetUserById, CreateUser, UpdateUser, DeleteUser}