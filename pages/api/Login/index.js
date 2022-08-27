import dbConnect from "../../../utils/mongo"
import User from '../../../models/User'
import mongoose from 'mongoose'
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken';

const KEY = process.env.JWT_KEY;

export default async function handler(req, res) {
    // console.log(req)
    const { method } = req;
    dbConnect();

    if(method === 'POST') {
        try{
            const {username,password,email,id} = req.body;
            if(!username || !password || !id) {
                res.status(404).json('Invalid credentials provided.')
            }
            if(!mongoose.isValidObjectId(id)){
                return res.status(404).json("No such user exists.");
            }
            const user = await User.findById(id); // equivalent to findOne({ _id: id})
            console.log(user)
            const validPassword = await bcrypt.compare(password, user.password);
            if(!validPassword){
                return res.status(400).json("Invalid username or password.");
            }
            else{
                const payload = {
                    id: id,
                    email: user.email,
                    createdAt: user.createdAt,
                  };
                  /* Sign token */
                  const token = await jwt.sign(
                    payload,
                    KEY,
                    {
                      expiresIn: 31556926, // 1 year in seconds
                    }
                  );
                  return res.status(200).json({"message":"Logged in successfully.", token:'Bearer '+ token});
            }
            console.log(req.body)
        }
        catch(err){
            console.log(err);
        }
    }
}