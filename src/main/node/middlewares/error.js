module.exports = (err, req, res, next) => {
  const code = Math.random().toString(36).substring(2, 8).toUpperCase();
  const timestamp = new Date().toISOString();

  log.error({
    code,
    timestamp,
    message: err.message,
    stack: err.stack,
  });

  if (err && err.code === "BAD_REQUEST" && err.errors && Array.isArray(err.errors)) {
    return res.status(400).json({
      code: `BR-${code}`,
      message: err.message,
      errors: err.errors
    });
  }

  if (err && err.isOperational && err.statusCode) {
    return res.status(err.statusCode).json({
      code: `FN-${code}`,
      message: err.message
    });
  }

  if (err && err.name === "ValidationError") {
    const errors = Object.values(err.errors).map((error) => ({
      field: error.path,
      message: error.message,
    }));
    return res.status(400).json({
      code: `VE-${code}`,
      message: "Datos de entrada inválidos",
      errors,
    });
  }

  if (
    err &&
    err.name === "MongooseError" &&
    err.cause &&
    err.cause.code === 11000
  ) {
    return res.status(409).json({
      message: err.message,
    });
  }

  res.status(500).json({
    code,
    timestamp,
    message: "Oops, ocurrió algo inesperado"
  });
};
