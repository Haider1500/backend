const { models } = require("./index");

module.exports = {
  getSession: async (sessionId) => {
    try {
      const session = await models.sessions.findOne({
        where: { sessionId: sessionId },
      });

      return {
        response: session,
      };
    } catch (error) {
      return { error: error };
    }
  },
  createSession: async (body) => {
    try {
      const session = await models.sessions.create(body);
      return {
        response: session,
      };
    } catch (error) {
      return { error: error };
    }
  },

  deleteSession: async (sessionId) => {
    try {
      const session = await models.sessions.destroy({
        where: { sessionId: sessionId },
      });
      return {
        response: session,
      };
    } catch (error) {
      return { error: error };
    }
  },
};
