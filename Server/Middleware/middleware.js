const result = require("../utils/result");
const config = require("../utils/config");
const jwt = require("jsonwebtoken");

function myMiddleware(request, response, next) {
  console.log("My middleware called");
  if (request.url == "/users/Signin" || request.url == "/users/Signup") next();
  else {
    const token = request.headers.token;
    if (token) {
      try {
        const payload = jwt.verify(token, config.secret);
        request.headers.id = payload.id;
        next();
      } catch (e) {
        response.send(result.createErrorResult("Invalid Token"));
      }
    } else response.send(result.createErrorResult("Token is missing"));
  }
}

module.exports = myMiddleware;
