const { models } = require("./index");

module.exports = {
  getTask: async (taskId) => {
    try {
      const task = await models.tasks.findOne({ where: { taskId: taskId } });
      return {
        response: task,
      };
    } catch (error) {
      return { error: error };
    }
  },
};
