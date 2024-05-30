const joi = require("joi");
const taskService = require("../services/taskService");

const getTaskSchema = joi.object().keys({
  taskId: joi.string().required(),
});
const deleteTaskSchema = joi.object().keys({
  taskId: joi.string().required(),
});
const createTaskSchema = joi.object().keys({
  name: joi.string().min(4).max(50).required(),
  description: joi.string().min(4).max(255).required(),
  userId: joi.string().required(),
});
const updateTaskSchema = joi.object().keys({
  taskId: joi.string().required(),
  name: joi.string().min(4).max(50),
  description: joi.string().min(4).max(255),
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
  deleteTask: async (req, res) => {
    try {
      const validate = await deleteTaskSchema.validateAsync(req.query);
      const task = await taskService.deleteTask(validate.taskId);
      if (task.error) {
        return res.send({ error: task.error });
      }
      return res.send({ response: task.response });
    } catch (error) {
      return res.send({ error: error.message });
    }
  },
  updateTask: async (req, res) => {
    try {
      const validate = await updateTaskSchema.validateAsync(req.body);
      const task = await taskService.updateTask(validate);
      console.log(task, "==========task");
      if (task.error) {
        return res.send({ error: task.error });
      }
      return res.send({ response: task.response });
    } catch (error) {
      return res.send({ error: error.message });
    }
  },
};
