const { BadRequestError } = require("../handlers/error.handler");
const bcrypt = require("bcrypt");
const TokenService = require("./token.service");
const UserModel = require("../models/user.model");

class AccessService {
  static signUp = async ({ name, email, password }) => {
    const holderUser = await UserModel.findOne({ email });
    if (holderUser) {
      throw new BadRequestError("Email already in use");
    }
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const newUser = await UserModel.create({
      name,
      email,
      password: passwordHash,
    });

    const tokens = await TokenService.createTokensPair({ userId: newUser._id });

    return { newUser, tokens };
  };
}

module.exports = AccessService;
