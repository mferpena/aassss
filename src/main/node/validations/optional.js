const base = require("./base");

module.exports = {
  string: {
    s: base.string.s.optional(),
    m: base.string.m.optional(),
    l: base.string.l.optional(),
    xl: base.string.xl.optional(),
    xxl: base.string.xxl.optional(),
    xxxl: base.string.xxxl.optional()
  },
  number: {
    s: base.number.s.optional(),
    m: base.number.m.optional(),
    l: base.number.l.optional()
  },
  boolean: base.boolean.optional(),
  email: base.email.optional(),
  phone: base.phone.optional()
};
