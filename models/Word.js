import mongoose, { mongo } from "mongoose";

const WordSchemna = new mongoose.Schema({
  text: { type: String, required: "Text is required" },
  title: { type: String, required: "Title is required" },
  description: { type: String, required: "Description is required" },
  views: { type: Number, default: 0 },
  createAt: { type: Date, default: Date.now },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

const model = mongoose.model("Word", WordSchemna);
export default model;
