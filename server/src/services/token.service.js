const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { storageToken } = require("../models/repositories/token.repo");

class TokenService {
  static generateKeyPairSync = () => {
    const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
      modulusLength: 4096,
      publicKeyEncoding: {
        type: "pkcs1",
        format: "pem",
      },
      privateKeyEncoding: {
        type: "pkcs1",
        format: "pem",
      },
    });
    return { publicKey, privateKey };
  };

  static createTokensPair = async (payload) => {
    // Sign accessToken and refreshToken with the private key
    const { publicKey, privateKey } = TokenService.generateKeyPairSync();
    console.log(publicKey, privateKey);
    const publicKeyString = publicKey.toString();
    const filter = { user: payload.userId };
    const update = { publicKey: publicKeyString };
    const options = { new: true, upsert: true };

    const holderToken = await storageToken({ filter, update, options });

    const accessToken = jwt.sign(payload, privateKey, {
      expiresIn: "1h",
      algorithm: "RS256",
    });
    const refreshToken = jwt.sign(payload, privateKey, {
      expiresIn: "7d",
      algorithm: "RS256",
    });

    const decoded = jwt.verify(
      accessToken,
      holderToken.publicKey,
      (error, result) => {
        if (error) {
          throw new Error("Invalid access token");
        }
        return result;
      }
    );
    console.log(decoded);

    return { accessToken, refreshToken };
  };
}

module.exports = TokenService;
