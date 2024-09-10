const AccessController = require("../../controllers/access.controller");
const { handlerCatchError } = require("../../utils");

const route = require("express").Router();

route.post("/access/signup", handlerCatchError(AccessController.signUp));

module.exports = route;
