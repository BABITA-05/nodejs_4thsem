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
    let id = req.params.id
    if(!id){
        res.status(404).json({
            message:"id is required"
        })
        return
    }
    let reqData = req.body
    if(!reqData){
        res.status(404).json({
            message:"request body is empty"
        })
        return
    }
    //finding user with id
    let matchedUser = AllUsers.find(
        (ele)=>ele.id == id
    )
    if(!matchedUser){
        res.status(402).json({
            message:`user with id ${id} not found`
        })
        return
    }
    let email = reqData.email
    let name = reqData.name

    //Todo add validation for data must be either email or name
    if(email){
        matchedUser.email = email
    }
    if(name){
        matchedUser.name = name
    }
    let data = {
        message:"user updated successfully",
        data: AllUsers
    }
    res.status(300).json(data)
    
}
let DeleteUser = (req, res)=>{
    let id = req.params.id
    if(!id){
        res.status(404),json({
            message:"Id is required"
        })
        return
    }
    let matchedIndex = AllUsers.findIndex(
        (ele)=>ele.id == id
    )

    //deleting element of matched index
    AllUsers.splice(matchedIndex, 1)
    let data = {
        message:"user updated successfully",
        data:AllUsers
    }
    res.status(300).json(data)
    
}
export {GetAllUsers, GetUserById, CreateUser, UpdateUser, DeleteUser}