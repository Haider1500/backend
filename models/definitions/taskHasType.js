const sequelize = require("../../bin/dbConnection");

const { Model, DataTypes } = require("sequelize");

class taskHasType extends Model {}

taskHasType.init(
  {
    taskId: {
      primaryKey: true,
      type: DataTypes.STRING(255),
    },
  },
  {
    tableName: "taskHasType",
    sequelize,
  }
);

module.exports = taskHasType;
