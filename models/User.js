import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    // id:String,
    username:{
        type:String,
        maxLength:50,
        required:true
    },
    password:{
        type:String,
        // maxLength:50,
        required:true
    },
    email:{
        type:String,
        maxLength:150,
        required:true
    },
    address:String,
    totalOrders:Number,
    profilePic:String,
    phone:{
        type:Number,
        maxLength:10
    },
    plan:{
        type:String,
        variant:String,
    }
},
    { timestamps:true }
);

export default mongoose.models.User || mongoose.model("User",UserSchema);
// only create model in our db if not present there