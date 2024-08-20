// middlewares/middleware1.js
export const passwordChecker = (req, res, next) => {
    console.log("The request body is", req.body)
    console.log("Password verification middleware");
    next();
  };
