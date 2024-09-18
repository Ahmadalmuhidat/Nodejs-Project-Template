const BasicMiddleware = (req, res, next) => {
  console.log("This is a basic middleware");

  next();
};

module.exports = BasicMiddleware;
