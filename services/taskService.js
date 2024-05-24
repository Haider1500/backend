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
};
