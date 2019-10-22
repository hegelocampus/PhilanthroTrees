const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateTask(data) {
  let errors = {};

  data.title = validText(data.title) ? data.title : "";
  data.details = validText(data.details) ? data.details : "";

  if (!Validator.isLength(data.title, { min: 5, max: 30 })) {
    errors.title = "Task title must be between 5 and 30 characters";
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = "Task title is required";
  }

  if (!Validator.isLength(data.details, { max: 250 })) {
    errors.details = "Task details cannot exceed 250 characters";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }

}