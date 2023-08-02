import express from "express"
import {getProfiles, postProfile,deleteProfile} from "../controller/Users.js";

const router = express.Router()

router.get("/profiles", getProfiles)
router.post("/postProfile", postProfile)
router.delete("/profile/:id", deleteProfile)
export default router