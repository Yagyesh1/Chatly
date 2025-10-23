import {Document, Schema, model} from 'mongoose'
interface userStructure extends Document{
    name: string;
    email: string;
    password: string;
    profileImage: string;
}
const userSchema = new Schema<userStructure>({
    name : {
        type : String,
        required : true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type : String,
        required: true,
    },
    profileImage: {
        type: String,
    }
})
const User =  model<userStructure>("User",userSchema) 
export default User