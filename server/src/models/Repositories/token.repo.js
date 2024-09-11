const TokenModel = require("../token.model");

const storageToken = async ({ filter, update, options }) =>
  await TokenModel.findOneAndUpdate(filter, update, options);

module.exports = { storageToken };
