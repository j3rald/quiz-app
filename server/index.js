import bodyParser from "body-parser";
import express from "express";
import Routes from "./routes";
import cors from "cors";
const app = express();
const dotenv = require("dotenv");

dotenv.config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

Routes.initRoutes(app);

const port = process.env.PORT || 3080;
app.listen(port, () => {
  console.log(`SERVER started at ${port}`);
});
