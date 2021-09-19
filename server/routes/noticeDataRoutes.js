import  express from "express";

const router = express.Router()

import {noticeData} from '../data/NoticeBoardData.js'

router.get('/' , (req,res) => {
    res.status(200).json( noticeData);
})

export default router;