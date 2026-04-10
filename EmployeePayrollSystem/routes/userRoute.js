import express from "express";
import login from "../middleware/login.js";
import Employee from "../model/userSchema.js";

const router = express.Router();

router.get("/",async (req, res) => {
    const data = await Employee.find();
    res.render("home", { employees: data });
});

router.get("/emp", async (req, res) => {
    const data = await Employee.find();
    res.json(data);
});

router.get("/add", (req, res) => {
    res.render("addEmployee"); 
});

router.post("/emp",async (req, res) => {
    const { name, profilePic, gender, department, basicSalary,joiningDate,notes } = req.body;

    await Employee.create({
        name,
        profilePic,
        gender,
        department: Array.isArray(department) ? department.join(", ") : department,
        basicSalary,
        joiningDate,
        notes
    });
  
    res.redirect("/");
});

router.get("/emp/:id", login, async (req, res) => {
    const employee = await Employee.findById(req.params.id);

    if (!employee) {
        return res.status(404).json({ message: "Employee not found" });
    }

    res.json(employee);
});

router.post("/login", async (req, res) => {
    const { name, password } = req.body;

    const user = await Employee.findOne({ name });

    if (!user) {
        return res.status(404).json({ message: "user not here" });
    }

    if (!user.password || user.password !== password) {
    return res.status(404).json({ message: "Invalid" });
    }

    res.json({
        message: "Login successful",
        token: "mst"
    });
});


router.get("/delete/emp/:id", async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id);
    res.redirect("/");
});

router.get("/edit/:id", async (req, res) => {
    const employee = await Employee.findById(req.params.id);
    res.render("editEmployee", { employee });
});

router.post("/update/:id", async (req, res) => {
    const { name, profilePic, gender, department, basicSalary, joiningDate, notes } = req.body;

    await Employee.findByIdAndUpdate(req.params.id, {
        name,
        profilePic,
        gender,
        department: Array.isArray(department) ? department.join(", ") : department,
        basicSalary,
        joiningDate: joiningDate || undefined,
        notes
    });

    res.redirect("/");
});

export default router;
