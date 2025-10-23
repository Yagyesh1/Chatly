import mongoose, {Document} from "mongoose";
interface messagStructure extends Document{
  senderId : mongoose.Schema.Types.ObjectId;
  recieverId: mongoose.Schema.Types.ObjectId;
  text?: string;
  image?: string;
}
const messageSchema = new mongoose.Schema<messagStructure>({
   senderId : {
     type : mongoose.Schema.Types.ObjectId,
     ref : "User",
     required : true
   },
   recieverId: {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User",
    required : true
   },
   text:{
    type : String
   },
   image:{
    type: String
   }
},
   {timestamps: true}
)
const Message = mongoose.model("Message", messageSchema )
export default Message