import mongoose from 'mongoose'

// Schema definition
const userSchema = mongoose.Schema({
    name :{ type : String ,required : true} ,
    studentId : {type : String},
    age: {type:Number},
    achievements:{type : [String]},
    linkToResume: {type:String},
    gender:{type:String}
})

// define the model using the schema
const SudentDataModel = mongoose.model( "SudentDataModel" , userSchema)

// export the model
export default SudentDataModel