import  express from "express";
import { getStudentData , updateStudentData } from "../controllers/dataControllers.js";

const router = express.Router()


router.get('/' , getStudentData)

router.patch('/:id' , updateStudentData)

export default router;