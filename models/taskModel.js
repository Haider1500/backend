const { models } = require("./index");

module.exports = {
  getTask: async (taskId, taskName) => {
    try {
      console.log(taskId, "=========taskId");
      console.log(taskName, "=========taskname");
      const task = await models.tasks.findOne({
        ...(taskId
          ? { where: { taskId: taskId } }
          : { where: { name: taskName } }),
      });

      return {
        response: task,
      };
    } catch (error) {
      return { error: error };
    }
  },
  createTask: async (body) => {
    try {
      const task = await models.tasks.create(body);
      return {
        response: task,
      };
    } catch (error) {
      return { error: error };
    }
  },
  getAllTask: async () => {
    try {
      const tasks = await models.tasks.findAll();
      console.log(tasks, "===========tasks inside the model");
      return {
        response: tasks,
      };
    } catch (error) {
      return { error: error };
    }
  },
};
