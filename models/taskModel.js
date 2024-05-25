const { models } = require("./index");

module.exports = {
  getTask: async (taskId, taskName) => {
    try {
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
      return {
        response: tasks,
      };
    } catch (error) {
      return { error: error };
    }
  },
  deleteTask: async (taskId) => {
    try {
      const tasks = await models.tasks.destroy({ where: { taskId: taskId } });
      return {
        response: tasks,
      };
    } catch (error) {
      return { error: error };
    }
  },
  updateTask: async ({ taskId, ...body }) => {
    try {
      const task = await models.tasks.update(
        { ...body },
        { where: { taskId: taskId } }
      );
      return {
        response: task,
      };
    } catch (error) {
      return { error: error };
    }
  },
};
