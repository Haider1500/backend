const userModel = require("../models/userModel");
const { compare } = require("bcryptjs");

module.exports = {
  login: async (body) => {
    try {
      const isUser = await userModel.getUser(false, body.userName);
      if (isUser.error || !isUser.response) {
        return {
          response: "incorrect credentials",
        };
      }
      const isValid = await compare(
        body.password,
        isUser.response.dataValues.password
      );
      if (!isValid) {
        return {
          response: "incorrect credentials!",
        };
      }
      delete isUser.response.dataValues.password;
      return {
        response: isUser.response,
      };
    } catch (error) {
      return { error: error?.message || error };
    }
  },
  logout: async () => {
    try {
      return {
        message: "user has logged out",
      };
    } catch (error) {
      return { error: error };
    }
  },
};
