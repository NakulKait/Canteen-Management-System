const express = require("express");

const app = express();
app.use(express.json());

//user defined
const myMiddleware = require("./Middleware/middleware");
const userRouter = require("./Routes/User");
const orderRouter=require("./Routes/Orders");

app.use(myMiddleware);
app.use("/users", userRouter);
app.use("/orders",orderRouter);
app.listen(4000, "localhost", () => {
  console.log("Server started at port 4000");
});
