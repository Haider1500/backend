const authService = require("../services/authService");
const joi = require("joi");
const authSchema = joi.object().keys({
  userName: joi.string().required(),
  password: joi.string().min(3).max(20).required(),
});

module.exports = {
  login: async (req, res) => {
    try {
      const validate = await authSchema.validateAsync(req.body);
      const isUser = await authService.login(validate);
      return res.send({
        response: isUser.response,
      });
    } catch (error) {
      res.send({
        error: error?.message || error,
      });
    }
  },
  logout: (req, res) => {
    res.send({
      message: "logged out",
    });
  },
};
