// middlewares/middleware1.js
export const passwordChecker = (req, res, next) => {
    console.log("Password verification middleware");
    next();
  };
  