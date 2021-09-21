import mongoose from 'mongoose'

// Schema definition
const userSchema = mongoose.Schema({
    title :{ type : String ,required : true} ,
    date : {type : String},
    description: {type:String},
   
})

// define the model using the schema
const NoticeDataModel = mongoose.model( "NoticeDataModel" , userSchema)

// export the model
export default NoticeDataModel