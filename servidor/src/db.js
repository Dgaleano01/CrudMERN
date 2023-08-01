import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://root:1234@projectmeanwithme.lhysagp.mongodb.net/users");
        console.log(">> DB Connect")
    } catch (error) {
        console.log(error)
    }
}