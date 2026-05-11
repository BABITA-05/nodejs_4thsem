let initialRouteHandler = (req, res)=>{
    res.send("My first api is successful")
}
let getAllUsersHandler = (req, res)=>{
    console.log("/users called with get method")
    res.send("all users fetched")
}
export {initialRouteHandler, getAllUsersHandler}