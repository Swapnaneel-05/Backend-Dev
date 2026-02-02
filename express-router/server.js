import express from "express";
import userRoute from "./router/userRoute.js"
import registerRoute from "./router/registerRoute.js"
import reportRoute from "./router/reportRoute.js"

const port = 3000;
const app = express();

app.use("/api",userRoute)
app.use("/api",registerRoute)
app.use("/api",reportRoute)

app.listen(port,()=>{
    console.log("server running on"+port)
})