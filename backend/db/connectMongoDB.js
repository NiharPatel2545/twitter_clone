import mongoose from 'mongoose';

const connectMongoDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        console.error(`Error connecting to mongoDB: ${Error.message}`);
        process.exit(1); // Exit the process with failure
    }
}

export default connectMongoDB;