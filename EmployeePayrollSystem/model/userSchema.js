import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name: String,
    profilePic: String,
    gender: String,
    department: String,
    basicSalary: String,
    joiningDate: String,
    notes: String
}, { timestamps: true });

export default mongoose.model("Employee", employeeSchema);