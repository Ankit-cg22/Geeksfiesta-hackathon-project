import mongoose from 'mongoose';
import NoticeDataModel from '../models/noticeData.js'

export const getNoticeData = async (req,res) => {
    try {        
        //retrive all data present in the data base
        const noticeData = await NoticeDataModel.find();    
                                
        res.status(200).json(noticeData);        
        // we respond with the data received from db
       
    } catch (error) {
        // if error occurs
        res.status(404).json( { message : error.message});

    }
}

export const createNotice = async(req , res)=> {

    const notice = req.body;
    // create new notice in the db using this postBody

    const newNotice = new NoticeDataModel( notice); // we save it to the db using the model

    try {
        await newNotice.save();
        // try saving it to the db

        res.status(201).json(newNotice);

    } catch (error) {

        console.log(error)
        res.status(409).json({message : error.message});
    }
}


export const updateNoticeData = async( req ,res) => {
    const { id  } = req.params;

    const newData = req.body;

    // // check with mongoose if any data with that id exists or not
    if( !(mongoose.Types.ObjectId.isValid(id)) ) return res.status(404).send(`No post with id : ${id}`);

    const updatedData = await NoticeDataModel.findByIdAndUpdate( id , {...newData , id}, {new : true});

    // the post object does not have the id , so we spread it and also send the id with it , it wil be used by the db
    res.json(newData);
}   

export const deleteNotice = async(req, res) => {

    const {id} = req.params;

    // check with mongoose if any post with that id exists or not
    if( !(mongoose.Types.ObjectId.isValid(id)) ) return res.status(404).send(`No post with id : ${id}`);
    
    await NoticeDataModel.findByIdAndRemove( id );

    res.json( {message : "Post deleted successfully"})

}