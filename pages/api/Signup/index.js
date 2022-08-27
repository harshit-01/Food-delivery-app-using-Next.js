import dbConnect from "../../../utils/mongo"
import User from '../../../models/User'
import bcrypt from "bcrypt"
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
    // console.log(req)
    const { method } = req;
    dbConnect();
    const signUp = async()=>{
        try{
            const {username,password,email,address} = req.body;
            await bcrypt.hash(password, 10).then(async(hash)=>{
                const encryptedPassword = hash;
                // const id = uuidv4();
                const user = await User.create({username,password:encryptedPassword,email,address});
                // console.log(user)
                res.status(201).json({"message":"Data stored to db successfully.", "user":user});
            })
            .catch((err)=>{
                res.status(400).json(err);
            });
        }
        catch(err){
            res.status(500).json(err);
        }
    }

    if(method === 'POST') {
        signUp();
        // console.log(req.body)
    }
}