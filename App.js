import express from "express";
import db from "./config/Database.js";
import bodyParser from "body-parser";
import UserRoute from "./routes/UserRoute.js"
const app = express();

(async () => {
    await db.sync();
})();

app.use(express.json());
app.use(UserRoute);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log("Server start in " + PORT + " Port")
})