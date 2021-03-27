const validatorFactory = require("./validatorFactory");

const registerValidator = validatorFactory({
  fullName: { type: "string"},
  email: { type: "email" },
  password: { type: "string", empty: false }
});

module.exports = registerValidator;