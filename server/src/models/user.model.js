const { default: mongoose } = require("mongoose");

const DOCUMENT_NAME = "User";
const COLLECTION_NAME = "Users";

/**
 * Represents the schema for the 'Auth' document in the 'Auths' collection.
 *
 * @typedef {Object} UserSchema
 * @property {string} name - The name of the user.
 * @property {string} email - The email of the user.
 * @property {string} password - The password of the user.
 * @property {string} role - The role of the user (default: 'user').
 * @property {boolean} verify - The verification status of the user (default: false).
 */

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      maxlength: 20,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
      enum: ["admin", "mod", "user"],
    },
    verify: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

/**
 * Mongoose model for the 'Auth' document.
 *
 * @type {import('mongoose').Model<AuthSchema>}
 */
const UserModel = mongoose.model(DOCUMENT_NAME, userSchema);

module.exports = UserModel;
