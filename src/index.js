// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv"; // for this to work import we have add some -r in package.json dev script
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

//connectDB returns Promise as it async function
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongGo db connection failed!!!", error);
  });
