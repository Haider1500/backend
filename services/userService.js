const { hash } = require("bcryptjs");
const userModel = require("../models/userModel");

module.exports = {
  createUser: async (body) => {
    try {
      // delete body.confirmPassword;
      body.password = await hash(body.password, 10);

      const isUser = await userModel.getUser();
      if (isUser.error || isUser.response) {
        return {
          error: "user already exists",
        };
      }
      const user = await userModel.createUser(user);
      if (user.error) {
        return {
          error: error.message,
        };
      }
      // delete user.response.password;
      return {
        response: user,
      };
    } catch (error) {
      error: error;
    }
  },
};
