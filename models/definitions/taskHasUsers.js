const sequelize = require("../../bin/dbConnection");

const { Model, DataTypes } = require("sequelize");

class taskHasUsers extends Model {}

taskHasUsers.init(
  {
    userId: {
      primaryKey: true,
      type: DataTypes.STRING(255),
    },
  },
  {
    tableName: "taskHasUsers",
    sequelize,
  }
);

module.exports = taskHasUsers;
