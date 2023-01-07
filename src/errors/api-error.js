class APIError extends Error {
  _statusCode = 500;
  _errorType = "Internal Server Error";

  constructor(message, statusCode, errorType) {
    super(message);
    this._statusCode = statusCode;
    this._errorType = errorType;

    Error.captureStackTrace(this, this.contructor);
  }
}

export default APIError;
