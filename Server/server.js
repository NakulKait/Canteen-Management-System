const express = require("express");

const app = express();
app.use(express.json());

//user defined
const userRouter = require("./Routes/User");

app.use("/users", userRouter);
app.listen(4000, "localhost", () => {
  console.log("Server started at port 4000");
});
