import express from "express";

const router = express.Router();

let validation = (req,res,next)=>{
    const token = req.query.token;

    if(token === "admin123"){
        next();
    }
    else{
        return res.status(401).json({
            message : "unauhtorized"
        })
    }
}
router.get("/login",validation,(req,res)=>{
    res.send("Token is valid ")
})

router.get("/signup",(req,res)=>{
    res.send("Signup page")
})

export default router;