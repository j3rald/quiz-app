import express from "express";
import verifyToken from "../middlewares/verifyToken";
const Questions = require("../models/questionSchema");
const dbConn = require("../database/connection");

const questionRoutes = express.Router();

questionRoutes.get("/", verifyToken, async (req, res) => {
  try {
    const response = await Questions.find({});

    if (response) {
      const newReponse = response.reduce((p, c) => {
        const newObj = {
          id: c.id,
          question: c.question,
          options: c.options,
          correctAns: c.correctAns,
          type: c.type,
          weight: c.weight
        };

        p.push(newObj);
        return p;
      }, []);
      res.status(200).json(newReponse);
    }
  } catch (error) {
    console.log(error.message);
  }
});
export default questionRoutes;
