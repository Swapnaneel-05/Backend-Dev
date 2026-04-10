import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import userRoute from "./routes/userRoute.js";
import logfun from "./middleware/track.js";
import connectDb from "./config/db.js";

connectDb();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(logfun);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", userRoute);

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});