import express from "express";
import { ObjectId } from "mongodb";
import verifyToken from "../middlewares/verifyToken";

const dbConn = require("../database/connection");
const Answers = require("../models/answerSchema");
const Question = require("../models/questionSchema");

const answerRoutes = express.Router();

answerRoutes.get("/results", verifyToken, async (req, res) => {
    try {
        const id = req.query.userId;
        const arrAns = await Answers.find({ userId: new ObjectId(id) }).sort({
            createAt: "descending",
        });

        res.status(200).json(arrAns);
      } catch (error) {}
});

answerRoutes.post("/submit", verifyToken, async (req, res) => {

    const question = await Question.find({});
    const answers = req.body;
    let score = 0;
    try {
        const ansArr = question.map((x) => {
            const b = answers.some((y) => y.questionId === x.id && y.id === x.correctAns);
            if(b){
                score += 1;
                return { questionId: x.id, correct: true };
            } 
            return { questionId: x.id, correct: false };
        });

        const ansObj = new Answers({
              userId: req.userId,
              result: ansArr,
              score
        });
        await ansObj.save();
        res.status(200).json(ansObj);
    } catch (error) {
        console.log(error.message);
    }
    
}); 

export default answerRoutes;
