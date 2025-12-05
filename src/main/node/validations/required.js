const base = require("./base");

module.exports = {
  string: {
    s: base.string.s.required(),
    m: base.string.m.required(),
    l: base.string.l.required(),
    xl: base.string.xl.required(),
    xxl: base.string.xxl.required(),
    xxxl: base.string.xxxl.required()
  },
  number: {
    s: base.number.s.required(),
    m: base.number.m.required(),
    l: base.number.l.required()
  },
  boolean: base.boolean.required(),
  email: base.email.required(),
  phone: base.phone.required()
};
