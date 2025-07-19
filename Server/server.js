// const express = require("express");

// const app = express();
// app.use(express.json());

// //user defined
// const myMiddleware = require("./Middleware/middleware");
// const userRouter = require("./Routes/User");
// const orderRouter = require("./Routes/Orders");
// const menuRouter = require("./Routes/menulist");
// app.use(myMiddleware);
// app.use("/menu", menuRouter);
// app.use("/users", userRouter);
// app.use("/orders", orderRouter);
// app.listen(4000, "localhost", () => {
//   console.log("Server started at port 4000");
// });

const express = require("express");
const app = express();
app.use(express.json());

// user-defined
const myMiddleware = require("./Middleware/middleware");
const userRouter = require("./Routes/User");
const orderRouter = require("./Routes/Orders");
const menuRouter = require("./Routes/menulist");
const feedbackRouter = require("./Routes/feedback"); // ✅ added feedback router

app.use("/menu", menuRouter);
app.use("/feedback", feedbackRouter);
app.use(myMiddleware);
app.use("/users", userRouter);
app.use("/orders", orderRouter);

// ✅ added feedback route

app.listen(4000, "localhost", () => {
  console.log("Server started at port 4000");
});
