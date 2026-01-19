const express = require("express")

const app = express();

app.get("/",(req,res)=>{
    res.send("hello everyone bye")
})

app.get("/user",(res,req)=>{
    res.send("user route")
})

app.get("/userdetails",(req,res)=>{
    const user = {name: "Swapnaneel", age: 20}
    res.json(user)
})

app.get("/about",(req,res)=>{
    res.send("about page")
})

app.get("/contact",(req,res)=>{
    res.send("contact page")
})

app.get("/locate",(req,res)=>{
    res.send("locate page")
})

app.get("/login",(req,res)=>{
    res.send("login succesfull")
})

app.get("/service",(req,res)=>{
    res.send("service page")
})
app.get("/password",(req,res)=>{
    res.send("password page")
})
app.get("/payment",(req,res)=>{
    res.send("payment page")
})




app.listen(3000,()=>{
    console.log("server is running")
})