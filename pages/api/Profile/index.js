import dbConnect from "../../../utils/mongo"
import User from '../../../models/User'

export default function handler(req, res) {
    // console.log(req)
    const { method } = req;
    dbConnect();

    if(method === 'POST') {
        const {username,password,email} = req.body;
        console.log(req.body)
    }
    res.status(200).json({ name: 'John Doe' })
}