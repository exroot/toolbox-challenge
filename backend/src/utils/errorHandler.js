const { CustomError } = require("./customError");

const errorHandler = (err, req, res, next) => {
  console.error("ERROR - errorHandler:", {
    message: err.message,
    stack: err.stack,
    name: err.name,
  });

  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  return res.status(500).json({ message: "Unexpected server error" });
};

module.exports = errorHandler;
