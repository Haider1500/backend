const joi = require("joi");

const createUserSchema = joi.object().keys({
  username: joi.string().required(),
  age: joi.string().required(),
  password: joi.string().min(3).max(20).required(),
});

module.exports = {
  createUser: (req, res) => {
    console.log(req.body);
    res.send({
      message: "Create a user",
    });
  },
  getUsers: async (req, res) => {
    try {
      console.log("control before validate");
      console.log(req.body);
      const validate = await createUserSchema.validateAsync(req.body);
      console.log("control after validate");
      console.log(validate, "validate");
      res.send({
        message: validate,
      });
    } catch (error) {
      res.send({
        message: error.message,
      });
    }
  },
};
