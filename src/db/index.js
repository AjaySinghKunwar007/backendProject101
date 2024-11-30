import mongoose from "mongoose";
import constants from "../constants.js";


const connectDB= async()=>{
    try {
        const connectionInstance= await mongoose.connect(`${constants.mongoDBUri}/${constants.DB_NAME}`);
        console.log(`/n MongoDB connected !!!! DB Host : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log(`MongoDb connection failed :: ${error}`);
        process.exit(1);
    }
}
export default connectDB;