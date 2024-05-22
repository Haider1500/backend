const { models } = require("./index");

module.exports = {
  createUser: (body) => {
    try {
      const user = models.users.create({ ...body });
      return {
        response: user,
      };
    } catch (error) {
      return {
        response: error.message,
      };
    }
  },
  getUser: (userId, userName) => {
    try {
      const user = models.users.findOne({
        ...(userId
          ? { where: { userName: userName } }
          : { where: { userId: userId } }),
      });
      return {
        response: user,
      };
    } catch (error) {
      return { error: error };
    }
  },
};
