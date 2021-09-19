import mongoose from 'mongoose'

// Schema definition
const userSchema = mongoose.Schema({
    name :{ type : String ,required : true} ,
    email:{ type : String ,required : true} ,
    password:{ type : String ,required : true} ,
    studentId : {type : String}
})

// define the model using the schema
const UserModel = mongoose.model( "UserModel" , userSchema)

// export the model
export default UserModel