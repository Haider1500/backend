const { v4: uuid } = require("uuid");
const taskModel = require("../models/taskModel");

module.exports = {
  getTask: async (taskId) => {
    try {
      const task = await taskModel.getTask(taskId);
      if (task.error) {
        return { error };
      }
      return { response: task.response };
    } catch (error) {
      return { error: error };
    }
  },
  createTask: async (body) => {
    try {
      body.taskId = uuid();
      const isTask = await taskModel.getTask(false, body.name);
      if (isTask.response || isTask.error) {
        return {
          error: isTask.error || "Task already exists!",
        };
      }

      console.log(body, "body");
      const task = await taskModel.createTask(body);
      if (task.error) {
        return { error: task.error };
      }
      return { response: task.response };
    } catch (error) {
      return { error: error };
    }
  },
  getAllTask: async () => {
    try {
      const tasks = await taskModel.getAllTask();
      if (tasks.error) {
        return { error: tasks.error };
      }

      return { response: tasks.response };
    } catch (error) {
      return { error: error };
    }
  },
  deleteTask: async (taskId) => {
    try {
      const tasks = await taskModel.deleteTask(taskId);
      if (tasks.error || !tasks.response) {
        return {
          error: tasks.error || "No task exists with this taskId!",
        };
      }

      return { response: tasks.response };
    } catch (error) {
      return { error: error };
    }
  },
  updateTask: async (body) => {
    try {
      const tasks = await taskModel.updateTask({ ...body });
      if (tasks.error || !tasks.response[0]) {
        return {
          error: tasks.error || "Provide the fields to update!",
        };
      }

      return { response: tasks.response };
    } catch (error) {
      return { error: error };
    }
  },
};
