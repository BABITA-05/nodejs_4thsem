let initialRouteHandler = (req, res)=>{
    res.send("My first api is successful")
}
let getAllUsersHandler = (req, res)=>{
    console.log("users called with get method")
    res.send("all users fetched")
}
let handlerCreateUser = (req, res)=>{
        let reqData = req.body

        let data = {
            message:"i have received the following data",
            data:reqData
        }
        res.json(data)
    }

let handlerCalculate = (req, res)=>{
       let reqData = req.body

       let data = {
        message:"we have following data",
        data:reqData
       }
       res.json(data)
    }
export {initialRouteHandler, getAllUsersHandler, handlerCreateUser, handlerCalculate}