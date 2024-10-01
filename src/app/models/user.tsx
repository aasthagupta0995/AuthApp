import { timeStamp } from 'console';
import mongoose from 'mongoose';
import Mongoose, { Schema, Document } from 'mongoose'

export interface Message extends Document {
    content: string;
    createdAt: Date;
}

export interface User extends Document {
    userName :string;
    password :string , 
    email:string,
    verifyCode:string,
    IsVerfied:boolean,
    verifyCodeExpiry:Date,
    isAccepting:boolean
    message :Message[]
}

const MessageSchema: Schema<Message> = new Schema({
    content: {
        type: String,
        required: [true, "Content is Required"]
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})

const UserSchema :Schema <User> =new Schema({
    userName :{
        type:String,
        required:[true, "Username is required"],
        unique:true,
        trim:true
    },
    password :{
        type:String,
        required:[true, "Password is required"],
        unique:true,
        // match:[regex pattern from google , 'Please enter in the correct password format ']
    }, 
    email:{
        type:String,
        required:[true, "Email is required"],
        unique:true, 
         // match:[regex pattern from google , 'Please enter in the correct email']
         match: [/.+\@.+\..+/, 'Please use a valid email address'],
    },
    verifyCode:{
        type:String,
        required:[true, "Verfify Code is required"],
        unique:true
    },
    IsVerfied:{
        default:false,
        type:Boolean,
        required:[true, "Verification is required"]

    },
    verifyCodeExpiry:{
        type:Date,
        required:[true, "Verification is required"]
    },
    isAccepting:{
        type:Boolean,
        default:true
    },
    message :[MessageSchema]
}

)

// In next js  for exporting need to verify if already created DB  feth from there || OR || Create the Db and then get the details from there 

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>('User', UserSchema);

export default UserModel;