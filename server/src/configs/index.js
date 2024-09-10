const fs = require("fs");

const corsConfig = {
  origin: process.env.URI_CLIENT || "localhost:5001",
  credentials: true, // Enable sending cookies
};
const morganConfig = {
  format: "combined", // Log in a combined format
  stream: fs.createWriteStream("access.log", { flags: "a" }), // Write logs to access.log file
};

const mongodbConfig = {
  uri: process.env.MONGODB_URI || "mongodb://localhost:27017/cfbooks",
  maxRetries: 3,
  maxPoolSize: 50,
};

module.exports = {
  corsConfig,
  morganConfig,
  mongodbConfig,
};
