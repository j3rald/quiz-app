import mongoose from "mongoose";
const AnswersScheme = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: "users" },
    result: { type: Array, required: true },
    score: { type: Number, required: true },
  },
  { timestamps: true }
);

const Answers = mongoose.model("results", AnswersScheme);
module.exports = Answers;
