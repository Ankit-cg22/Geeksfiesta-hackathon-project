import  express from "express";

import {   getNoticeData , createNotice , updateNoticeData , deleteNotice} from "../controllers/noticeDataControllers.js";

const router = express.Router()


//fetching all notices from db
router.get('/' , getNoticeData)

// create a notice
router.post('/',  createNotice);

//update
router.patch('/:id' , updateNoticeData)

//delete
router.delete('/:id',  deleteNotice)

export default router;