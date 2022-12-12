import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
    newReview :[
        {
            username: String,
            appReview: String,
            restaurantReview: String,
            rating : Number,
        }
    ]
},
    {timestamps:true}
);

export default mongoose.models.Review || mongoose.model('Review',ReviewSchema);