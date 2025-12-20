import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

console.log(process.env.MONGO_URL)
// console.log(DB_NAME)

const connectDB = async () => {
  try {
    const res = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
    console.log(`\n MongoDB is connected!! DB HOST: ${res.connection.host}`);
  } catch(error) {
    console.log("Error: ", error);
    process.exit(1);
  }
};

export default connectDB;
