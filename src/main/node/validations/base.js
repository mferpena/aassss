const Joi = require('joi');

const noInjectSQL = /^[a-zA-Z0-9 _\-.,áéíóúÁÉÍÓÚñÑ]+$/;

const messages = {
  'string.base': 'El valor debe ser un texto.',
  'string.empty': 'Este campo no puede estar vacío.',
  'string.max': 'El texto excede la longitud permitida.',
  'string.pattern.base': 'El formato contiene caracteres no permitidos.',
  'any.required': 'Este campo es obligatorio.',

  'number.base': 'Debe ser un número.',
  'number.integer': 'Debe ser un número entero.',
  'number.max': 'El número excede el máximo permitido.',

  'boolean.base': 'El valor debe ser verdadero o falso.',

  'string.email': 'El correo electrónico no tiene un formato válido.',

  'string.pattern.name': 'El número de teléfono no es válido.'
};

module.exports = {
  string: {
    s: Joi.string().max(2).pattern(noInjectSQL).messages(messages),
    m: Joi.string().max(6).pattern(noInjectSQL).messages(messages),
    l: Joi.string().max(22).pattern(noInjectSQL).messages(messages),
    xl: Joi.string().max(256).pattern(noInjectSQL).messages(messages),
    xxl: Joi.string().max(512).pattern(noInjectSQL).messages(messages),
    xxxl: Joi.string().max(1024).pattern(noInjectSQL).messages(messages)
  },

  number: {
    s: Joi.number().integer().max(2).messages(messages),
    m: Joi.number().integer().max(6).messages(messages),
    l: Joi.number().integer().max(22).messages(messages),
  },

  boolean: Joi.boolean().messages(messages),

  email: Joi.string().email().messages(messages),

  phone: Joi.string()
    .pattern(/^\+?[0-9]{7,15}$/, { name: 'phone' })
    .messages({
      ...messages,
      'string.pattern.name': 'El número de teléfono debe tener entre 7 y 15 dígitos.'
    }),
};
