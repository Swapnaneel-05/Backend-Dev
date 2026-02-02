import express from "express";

const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Home")
})

router.get("/user",(req,res)=>{
    res.send("user page")
})

export default router;