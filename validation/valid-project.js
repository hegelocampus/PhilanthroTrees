const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateProject(data) {
  let errors = {};

  data.name = validText(data.name) ? data.name : "";
  data.description = validText(data.description) ? data.description : "";


  if (!Validator.isLength(data.name, { min: 5, max: 30 })) {
    errors.name = "Project name must be between 5 and 30 characters";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Project name is required";
  }

  if (!Validator.isLength(data.description, { max: 250 })) {
    errors.description = "Project description cannot exceed 250 characters";
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = "Project description field is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }

}