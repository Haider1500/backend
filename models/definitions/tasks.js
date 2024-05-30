const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");
const users = require("./users");
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
    userId: {
      allowNull: false,
      type: DataTypes.STRING(255),
      references: {
        model: users,
        key: "userId",
      },
    },
  },
  { timestamps: true, paranoid: true, tableName: "tasks", sequelize }
);

module.exports = tasks;
