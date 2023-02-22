import mongoose from "mongoose";
const dotenv = require("dotenv");
dotenv.config();

const connString = process.env.DB_CONN;
mongoose.set("strictQuery", false);

mongoose
  .connect(`${connString}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    // console.log(error);
    console.log(dbString);
  });

const dbConn = mongoose.connection;
dbConn.on("error", console.error.bind(console, "connection error:"));
dbConn.once("open", function () {
  console.log("Connected to MongoDB");
});
module.exports = dbConn;