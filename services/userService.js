const { hash } = require("bcryptjs");
const { v4: uuid } = require("uuid");
const userModel = require("../models/userModel");

module.exports = {
  createUser: async (body) => {
    try {
      // delete body.confirmPassword;
      body.password = await hash(body.password, 10);
      body.userId = uuid();

      const isUser = await userModel.getUser("", body.userName);
      console.log(isUser, "isUser");
      if (isUser.error || isUser.response) {
        return {
          error: "user already exists",
        };
      }
      const user = await userModel.createUser(body);
      console.log(user, "created new user");
      if (user.error) {
        return {
          error: error.message,
        };
      }
      // delete user.response.password;
      return {
        response: user.response,
      };
    } catch (error) {
      error: error;
    }
  },

  deleteUser: async (userId) => {
    try {
      const deleteUser = await userModel.deleteUser(userId);
      if (deleteUser.error || !deleteUser.response) {
        return {
          error: deleteUser?.error || deleteUser.response,
        };
      }
      return {
        response: deleteUser.response,
      };
    } catch (error) {
      return { error: error };
    }
  },
  updateUser: async (body) => {
    try {
      const updateUser = await userModel.updateUser({ ...body });
      console.log(updateUser, "updateUser");
      if (updateUser.error || !updateUser.response[0]) {
        return {
          message: "user is not updated!",
          error: updateUser.error || updateUser.response,
        };
      }
      return {
        message: "successfully updated!",
        response: updateUser.response,
      };
    } catch (error) {
      return { error: error };
    }
  },

  getAllUser: async () => {
    try {
      const users = await userModel.getAllUser();
      if (users.error) {
        return { error: error };
      }
      return { response: users.response };
    } catch (error) {
      return { error: error };
    }
  },
};
