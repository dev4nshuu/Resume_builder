import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://devanshusingh109:Devanshu2005%23@cluster0.v93rmt4.mongodb.net/RESUME");
        console.log("DB connected");
    } catch (error) {
        console.error("DB connection error:", error);
    }
};
