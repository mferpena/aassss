const { badRequest } = require("./errors");

const validateBody = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body);
    if (error) {
      const errors = error.details.map((detail) => ({
        field: detail.path.join("."),
        message: detail.message,
      }));
      throw badRequest("Datos de entrada inválidos", errors);
    }
    req.body = value;
    next();
  };
};

const validateParams = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.params, { abortEarly: false });
    if (error) {
      const errors = error.details.map((detail) => ({
        field: detail.path.join("."),
        message: detail.message,
      }));
      throw badRequest("Parámetros de ruta inválidos", errors);
    }
    req.params = value;
    next();
  };
};

const validateQuery = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.query);
    if (error) {
      const errors = error.details.map((detail) => ({
        field: detail.path.join("."),
        message: detail.message,
      }));
      throw badRequest("Parámetros de consulta inválidos", errors);
    }
    req.query = value;
    next();
  };
};

module.exports = {
  validateBody,
  validateParams,
  validateQuery,
};
