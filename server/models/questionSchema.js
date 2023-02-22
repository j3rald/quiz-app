import mongoose from "mongoose";

// Question Model
const QuestionModel = new mongoose.Schema({
    id: {type: Number, required: true},
    question: { type: String, required: true },
    options: { type: Array, required: true },
    correctAns: { type: Number, required: true },
    type: { type: String, required: true },
    weight: { type: Number, required: true },
});

const Questions = mongoose.model("questions", QuestionModel);
module.exports = Questions;

