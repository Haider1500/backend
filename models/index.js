const sequelize = require("../bin/dbConnection");

const users = require("./definitions/users");
const tasks = require("./definitions/tasks");
const taskHasType = require("./definitions/taskHasType");
const taskHasUsers = require("./definitions/taskHasUsers");

const models = { users, tasks, taskHasType, taskHasUsers };

const db = {};
db.sequelize = sequelize;

sequelize.models = models;

module.exports = { db, models };
