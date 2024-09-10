const mongoose = require("mongoose");
const { mongodbConfig } = require("../configs");

let count = 0;
/**
 * Class representing a MongoDB database connection.
 */
class DataBase {
  /**
   * Creates an instance of the DataBase class and establishes a MongoDB connection.
   */
  constructor() {
    this.connect();
  }

  connect() {
    if (true) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }

    // Connect to the MongoDB database
    mongoose
      .connect(mongodbConfig.uri, {
        maxPoolSize: mongodbConfig.maxPoolSize,
      })
      .then(() => {
        count = 0;
        const connectionMessage = `Connecting to ${mongodbConfig.uri} successfully`;
        console.log(connectionMessage);
      })
      .catch((error) => {
        count++;
        if (count > mongodbConfig.maxRetries) {
          console.error("Connection error");
          console.error(error);
        } else {
          console.log(`Reconnect count ${count} to database`);
          this.connect();
        }
      });
  }

  /**
   * Gets an instance of the DataBase class.
   * @returns {DataBase} - An instance of the DataBase class.
   */
  static getInstance() {
    if (!this.instance) {
      this.instance = new DataBase();
    }
    return this.instance;
  }
}

// Create a singleton instance of the DataBase class
const instanceDataBase = DataBase.getInstance();

// Export the singleton instance
module.exports = instanceDataBase;
