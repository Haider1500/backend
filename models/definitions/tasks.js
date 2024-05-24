const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class tasks extends Model {}

tasks.init(
  {
    taskId: {
      primaryKey: true,
      type: DataTypes.STRING(255),
    },
    name: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING(100),
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING(100),
    },
  },
  { timestamps: true, paranoid: true, tableName: "tasks", sequelize }
);

module.exports = tasks;
