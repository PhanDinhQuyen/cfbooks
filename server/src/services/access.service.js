const { BadRequestError } = require("../handlers/error.handler");

class AccessService {
  static signUp = async () => {
    if (false) {
      throw new BadRequestError("SignUp failed");
    }

    return { data: "Success" };
  };
}

module.exports = AccessService;
