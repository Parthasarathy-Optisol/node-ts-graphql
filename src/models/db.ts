import mongoose from "mongoose";
import  loadEnv from "../config/loadEnv";


const uri = loadEnv().MONGODB_URI
const main = async () => {
  await mongoose.connect(uri)
};

main()
  .then(()=>console.log("mongo db connected"))
  .catch(error => console.error(error));