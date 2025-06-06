import mongoose from "mongoose";
import Review from "@/components/models/Review";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('✅ MongoDB connected successfully!');
    }
    const allReviews=await Review.find({});
    return NextResponse.json(allReviews);
  } catch (err) {
    console.error('❌ Error in POST /api/review:', err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
