const sequelize = require("../bin/dbConnection");

const users = require("./definitions/users");
const tasks = require("./definitions/tasks");
const taskHasType = require("./definitions/taskHasType");

const models = { users, tasks, taskHasType };

const db = {};
db.sequelize = sequelize;

sequelize.models = models;

module.exports = { db, models };
