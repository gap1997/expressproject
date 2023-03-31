const { constants } = require("../constants");
const errorhandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "Validation Failed",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    case 404:
      res.json({
        title: "Not Found",
        message: err.message,
        stackTrace: err.stack,
      });
    case constants.UNAUTHORIZED_ERROR:
      res.json({
        title: "Unauahorized",
        message: err.message,
        stackTrace: err.stack,
      });
    case constants.FORBIDDEN_ERROR:
      res.json({
        title: "Forbidden",
        message: err.message,
        stackTrace: err.stack,
      });
    case constants.SERVER_ERROR:
      res.json({
        title: "Server Error",
        message: err.message,
        stackTrace: err.stack,
      });

      deafult: console.log("No Error,All Good!");
      break;
  }
};
module.exports = errorhandler;
