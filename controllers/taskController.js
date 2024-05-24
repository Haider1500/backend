const joi = require("joi");
const userService = require("../services/userService");
const taskService = require("../services/taskService");

const getTaskSchema = joi.object().keys({
  taskId: joi.string().required(),
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
};
