import mongoose from "mongoose";
const schema = new mongoose.Schema({ name: String, description: String });
const Review = mongoose.models.Review || mongoose.model("Review", schema);
export default Review