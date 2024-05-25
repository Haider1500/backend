const joi = require("joi");
const taskService = require("../services/taskService");

const getTaskSchema = joi.object().keys({
  taskId: joi.string().required(),
});
const createTaskSchema = joi.object().keys({
  name: joi.string().min(4).max(50).required(),
  description: joi.string().min(4).max(255).required(),
});

module.exports = {
  getTask: async (req, res) => {
    try {
      const validate = await getTaskSchema.validateAsync(req.query);
      const task = await taskService.getTask(validate.taskId);
      return res.send({ response: task.response });
    } catch (error) {
      return res.send({ error });
    }
  },
  createTask: async (req, res) => {
    try {
      const validate = await createTaskSchema.validateAsync(req.body);
      console.log("first");
      const task = await taskService.createTask(validate);
      console.log("task", task);
      if (task.error) {
        return res.send({
          error: task.error,
        });
      }
      return res.send({ message: "Task created!", response: task.response });
    } catch (error) {
      return res.send({ error: error.message });
    }
  },
  getAllTask: async (req, res) => {
    try {
      const tasks = await taskService.getAllTask();
      console.log(tasks, "==========tasks in controller");
      if (tasks.error) {
        return res.send({ error: tasks.error });
      }
      return res.send({ response: tasks.response });
    } catch (error) {
      return res.send({ error: error.message });
    }
  },
};
