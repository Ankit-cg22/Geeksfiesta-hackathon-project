import mongoose from 'mongoose';
import SudentDataModel from '../models/studentData.js'

export const getStudentData = async (req,res) => {
    try {        
        //retrive all data present in the data base
        const studentInfo = await SudentDataModel.find(); 
                                
        res.status(200).json(studentInfo);        
        // we respond with the data received from db
       
    } catch (error) {
        // if error occurs
        res.status(404).json( { message : error.message});

    }
}


export const updateStudentData = async( req ,res) => {
    const { id  } = req.params;

    const newData = req.body;

    // // check with mongoose if any data with that id exists or not
    if( !(mongoose.Types.ObjectId.isValid(id)) ) return res.status(404).send(`No post with id : ${id}`);

    const updatedData = await SudentDataModel.findByIdAndUpdate( id , {...newData , id}, {new : true});

    // the post object does not have the id , so we spread it and also send the id with it , it wil be used by the db
    res.json(newData);
}   