

const isValid = function (value) {
  if (typeof value === "undefined" || value === null) return false;
  if (typeof value === "string" && value.trim().length === 0) return false;
  if (typeof value === Number && value.trim().length === 0) return false;
  return true;
};

let isValidBody = function (requestBody) {
  return Object.keys(requestBody).length > 0;
};



module.exports = { isValid, isValidBody };
