import mongoose from "mongoose";

const connectDb = async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/demodb");
        console.log("Connection Done");
    } catch (error) {
        console.log(error);
    }
}

export default connectDb;