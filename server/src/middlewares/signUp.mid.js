const { BadRequestError } = require("../handlers/error.handler");

module.exports = function signUpMiddleware(data) {
  // handle input validation

  // if data is not valid throw an error

  // if (!data.name) {
  //   throw new BadRequestError("Name is required");
  // }

  return data;
};
