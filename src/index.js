// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv"; // for this to work import we have add some -r in package.json dev script
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB();

// import { DB_NAME } from "./constants";

// //IIFE immediately invoked function expressions
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//   } catch (err) {
//     console.log("Error: ", err);
//     throw err;
//   }
// })();
