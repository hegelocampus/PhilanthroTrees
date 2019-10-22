const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function (data) {
  let errors = {};

  data.name = validText(data.name) ? data.name : ''

if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 characters";

  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";

  }


  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}
