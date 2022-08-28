import dbConnect from "../../../utils/mongo"
import User from '../../../models/User'
import jwt from 'jsonwebtoken';
import jwtVerify from "../../../utils/jwtVerfication"

const KEY = process.env.JWT_KEY;

export default async function handler(req, res) {
    // console.log(req)
    const { method } = req;
    dbConnect();

    const signUp = async(password)=>{
        await bcrypt.hash(password, 10).then(async(hash)=>{
            const encryptedPassword = hash;
            return encryptedPassword;
        })
    }
    const updateDetails = async(data,password,address)=>{
        const user = await User.findById(data._id);
        if(!user){
            res.status(404).json('User does not exist')
        }
        if(password){
            data.password  =  signUp();
        }
        else{
            data.password = user.password;
        }
        if(address){
            data.address  =  address;
        }
        else{
            data.address  =  user.address;
        }
        // console.log(data,user)
        user.username  = data.username;
        user.password = data.password;
        user.email = data.email;
        user.address = data.address;
        user.phone = data.phone;
        await user.save();
    }
    if(method === 'GET'){
        const {token,id} = req.body;
        // console.log(req.headers.cookie);
        let tok = req.headers.authorization.split(' ')[1];
        let isUserValid = jwtVerify(tok);
        console.log(isUserValid);
        if(isUserValid === false){
            res.status(404).json("Invalid User")
        } 
        else{
            const user = await User.findById(isUserValid.id);
            res.status(200).json({message:"success","user":user})
        }
    }
    if(method === 'PUT') {
        const {username,password,email,address,token,id,phone,img} = req.body;
        // console.log(token);
        const tok = token.split(' ')[1];
        // console.log(tok)
        let isUserValid = jwtVerify(tok);
        if(img && img.length > 0) {
            if(!isUserValid){
                res.status(404).json("Invalid User")
            } 
            else{
                const user = await User.findByIdAndUpdate(id,{profilePic:img})
                res.status(201).json({message:"success",valid:"Image stored in db successfully",img:user})
            }
        }
        else{
            const data = {
                _id:id,
                username:username,
                password:"",
                email:email,
                phone:phone,
                address:""
            }
            if(!isUserValid){
                res.status(404).json("Invalid User")
            } 
            else{
                updateDetails(data,password,address);
                res.status(201).json({message:"success",valid:"User is verified"})
            }
        }
    }
}