const joi = require("joi");
const { createUser } = require("../services/userService");
const userService = require("../services/userService");

const createUserSchema = joi.object().keys({
  userName: joi.string().required(),
  password: joi.string().min(3).max(20).required(),
  confirmPassword: joi.ref("password"),
});
// const updateUserSchema = joi.object().keys({
//   username: joi.string(),
//   age: joi.string(),
//   password: joi.string().min(3).max(20),
//   id: joi.required(),
// });
const deleteUserSchema = joi.object().keys({
  userId: joi.string().required(),
});

const updateUserSchema = joi.object().keys({
  userId: joi.string().required(),
  userName: joi.string(),
});

module.exports = {
  createUser: async (req, res) => {
    try {
      const validate = await createUserSchema.validateAsync(req.body);
      const users = await createUser(validate);
      res.send({
        response: users.response,
      });
    } catch (error) {
      res.send({
        message: error.message,
      });
    }
  },

  getUser: (req, res) => {
    res.send({
      message: "success",
      data: users,
    });
  },

  updateUser: async (req, res) => {
    try {
      const validate = await updateUserSchema.validateAsync(req.body);
      //updating the array of users
      const updatedUser = await userService.updateUser(validate);
      res.send({
        response: updatedUser,
      });
    } catch (error) {
      res.send({ message: error.message });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const validate = await deleteUserSchema.validateAsync(req.query);
      const deleteUser = await userService.deleteUser(validate.userId);
      if (deleteUser.error) {
        return res.send({
          error: error,
        });
      }
      return res.send({
        response: deleteUser.response,
      });
    } catch (error) {
      res.send({ message: error.message });
    }
  },
  getAllUser: async (req, res) => {
    try {
      const users = await userService.getAllUser();
      if (users.error) {
        return res.send({
          error: error,
        });
      }
      return res.send({
        users: users.response,
      });
    } catch (error) {
      res.send({ message: error.message });
    }
  },
};
