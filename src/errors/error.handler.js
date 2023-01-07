const handleDevErrors = (error, res) => {
  res.status(error._statusCode).json({
    status: error._statusCode,
    message: error.message,
    error: { ...error, stack: error.stack },
  });
};

const handleProdErrors = (error, res) => {
  res.status(error._statusCode).json({
    status: error._statusCode,
    message: error.message,
  });
};

const errorHandler = (error, req, res, next) => {
  let _error = { ...error };
  _error.message = error.message;
  _error._statusCode = _error._statusCode || 500;

  if (process.env.NODE_ENV === "development") {
    handleDevErrors(_error, res);
  } else if (process.env.NODE_ENV === "production") {
    handleProdErrors(_error, res);
  }
};

export default errorHandler;
