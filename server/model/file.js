const Sequelize = require("sequelize");
const db = require("../config/dbConn");

const File = db.define("files", {
  file: {
    type: Sequelize.BLOB,
  },
  file_name: {
    type: Sequelize.STRING,
  },
  size: {
    type: Sequelize.DOUBLE,
  },
  date: {
    type: Sequelize.DATE,
  },
});

module.exports = File;
