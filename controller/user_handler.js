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
    let reqData = req.body
    if(!reqData){
        res.status(400).json({
            message:"bad request"
        })
        return
    }

    let email = reqData.email
    let name = reqData.name
    let newData = {
        id:AllUsers.length+1,

    }
    if(email){
        newData.email = email
    }
    if(name){
        newData.name = name
    }
    //adding new data to array
    AllUsers.push(newData)
    let resData = {
        message:"user created successfully",
        data:AllUsers
    }
    //send json data to users with created status code )201
    res.status(201).json(resData)
}
let UpdateUser= (req, res)=>{
    
}
let DeleteUser = (req, res)=>{
    
}
export {GetAllUsers, GetUserById, CreateUser, UpdateUser, DeleteUser}