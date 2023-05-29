const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("./custom-error");
class UnAuthorizedError extends CustomAPIError {
  constructor(message, statusCode) {
    super(message);
    statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnAuthorizedError;
