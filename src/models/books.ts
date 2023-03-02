import mongoose from "mongoose";
const { Schema } = mongoose
const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
  })
  
export default  mongoose.model('book', BookSchema,'book')