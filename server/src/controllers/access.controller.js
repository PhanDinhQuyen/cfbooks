const { CreateResponse } = require("../handlers/success.handler");
const AccessService = require("../services/access.service");
const signUpMid = require("../middlewares/signUp.mid");

class AccessController {
  static signUp = async (req, res) =>
    new CreateResponse(await AccessService.signUp(signUpMid(req.body))).create(
      res
    );
}

module.exports = AccessController;
