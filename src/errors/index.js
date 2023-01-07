import APIError from "./api-error";
import errorHandler from "./error.handler";

class BadRequestException extends APIError {
  _statusCode = 400;
  _errorType = "BAD REQUEST";

  constructor(message, statusCode = 400, errorType = "BAD REQUEST") {
    super(message, statusCode, errorType);

    this._errorType = errorType;
    this._statusCode = statusCode;
  }
}

class NotFoundException extends APIError {
  _statusCode = 404;
  _errorType = "NOT FOUND";

  constructor(message, statusCode = 404, errorType = "NOT FOUND") {
    super(message, statusCode, errorType);

    this._errorType = errorType;
    this._statusCode = statusCode;
  }
}

class UnauthorizedException extends APIError {
  _statusCode = 401;
  _errorType = "UNAUTHORIZED";

  constructor(message, statusCode = 401, errorType = "UNAUTHORIZED") {
    super(message, statusCode, errorType);

    this._errorType = errorType;
    this._statusCode = statusCode;
  }
}

class ForbiddenException extends APIError {
  _statusCode = 403;
  _errorType = "FORBIDDEN";

  constructor(message, statusCode = 403, errorType = "FORBIDDEN") {
    super(message, statusCode, errorType);

    this._errorType = errorType;
    this._statusCode = statusCode;
  }
}

export {
  BadRequestException,
  NotFoundException,
  UnauthorizedException,
  ForbiddenException,
  errorHandler,
};
