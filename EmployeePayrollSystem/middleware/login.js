const login = (req,res,next)=>{
    const token = req.headers.authorization;

    if (token !== "mst") {
        return res.status(403).json({
            message: "Unauthorized"
        });
    }

    next();
};

export default login