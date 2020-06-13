import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  word: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Word",
  },
});

const model = mongoose.model("Comment", CommentSchema);
export default model;
