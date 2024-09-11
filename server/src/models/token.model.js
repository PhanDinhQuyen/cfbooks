const { default: mongoose } = require("mongoose");

const DOCUMENT_NAME = "Token";
const COLLECTION_NAME = "Tokens";
const DOCUMENT_REF = "User";

const tokenSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      // type: String,

      required: true,
      ref: DOCUMENT_REF,
      unique: true,
    },
    publicKey: {
      type: String,
      required: true,
    },
    refreshTokenUsed: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

const TokenModel = mongoose.model(DOCUMENT_NAME, tokenSchema);

module.exports = TokenModel;
