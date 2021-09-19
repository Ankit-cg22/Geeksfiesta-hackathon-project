import  express  from "express";

// for hashing the passwords
import bcrypt from 'bcryptjs'

//user model 
import UserModel from "../models/users.js";


export  const signUp = async (req, res) => {

   
    // collect data from front end
    const { name , email , password , confirmPassword} = req.body; 

    try {
        
        // check if user already exists
        const existingUser = await UserModel.findOne({ email }); 

        if( existingUser ) return res.send({message : "User already exists !  Sign In !"})

        

        // check if password and confirmPassword are same
        if( password !== confirmPassword )return res.send({ message : "Passwords do not match !!"})

     


        // now no problems in creating the user , create it 

        //-=-=-=-=-=-=-=-=-=-=-=-=-= CREATING A USER -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

        // hash the password 
        const hashedPassword = await bcrypt.hash( password , 12) ; // generally salt length is set as 12

        // store the data in the db(or model)
        const newUser = await UserModel.create({   
                email : email , 
                name : name , 
                password : hashedPassword,
                studentId : email.substring(0,7).toUpperCase()
            })

     


        // send back the user
        res.status(200).json( { result : newUser , message : "Success"})

    } catch (error) {
        res.status(500).json("Something went wrong !!")
    }
} 




export  const signIn = async (req, res) => {
    // we need email and password  , that comes from frontend
    const {email , password} = req.body ;

    try {
       
        // find the user
        const existingUser = await UserModel.findOne({ email });
       
        // check if the user exists or not
        if( !existingUser) return res.send({message : "User does not exist !! "})
      
        //check password 

        const correctPassword = await bcrypt.compare( password , existingUser.password ) ;
                                                    // password: the one we received in the request 
                                                    // existingUse.password :the one already present in the db


        if(!correctPassword) return res.send({message : "Invalid credentials !!"});
        

        res.status(200).json( { result : existingUser , message : "Success" })

        
    } catch (error) {
        res.status(500).json("Something went wrong !!")
    }


} 
