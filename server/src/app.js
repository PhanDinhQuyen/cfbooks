require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const compression = require("compression");
const { ReasonPhrases, StatusCodes } = require("http-status-codes");
const { morganConfig, corsConfig } = require("./configs");
const { NotFoundRequestError } = require("./handlers/error.handler");
const app = express();

function main() {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors(corsConfig));
  app.use(helmet());
  app.use(morgan(morganConfig.format, morganConfig));
  app.use(compression({}));

  app.get("/", (_, res) =>
    res.status(StatusCodes.OK).json({
      route: "/",
      status: "success",
      message: "Reply form server",
    })
  );

  app.use("/v1/api", require("./routes"));

  require("./databases/init.mongo.db");

  app.use((req, res, next) => {
    const error = new NotFoundRequestError("Not found request");
    next(error);
  });

  app.use((error, req, res, next) => {
    const defaultStatusCode = StatusCodes.INTERNAL_SERVER_ERROR;
    const statusCode = error.status || defaultStatusCode;
    const message =
      statusCode === defaultStatusCode
        ? ReasonPhrases.INTERNAL_SERVER_ERROR
        : error.message;

    // Log the error for production debugging
    console.error(error);

    return res.status(statusCode).json({
      status: "error",
      code: statusCode,
      message,
      stack: [error.stack], // clear when public
    });
  });
}

main();

module.exports = app;
