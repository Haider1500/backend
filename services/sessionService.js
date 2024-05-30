const sessionModel = require("../models/sessionModel");
const { v4: uuid } = require("uuid");

module.exports = {
  createSession: async (body) => {
    try {
      body.sessionId = uuid();
      const session = await sessionModel.createSession(body);
      console.log(session, "created new session");
      if (session.error) {
        return {
          error: error.message,
        };
      }
      return {
        response: session.response,
      };
    } catch (error) {
      error: error;
    }
  },

  deleteSession: async (sessionId) => {
    try {
      const session = await sessionModel.deleteSession(sessionId);
      if (session.error || !session.response) {
        return {
          error: session?.error || session.response,
        };
      }
      return {
        response: session.response,
      };
    } catch (error) {
      return { error: error };
    }
  },
  getSession: async (sessionId) => {
    try {
      const session = await sessionModel.getSession(sessionId);
      if (session.error || !session.response) {
        return {
          error: session?.error || session.response,
        };
      }
      return {
        response: session.response,
      };
    } catch (error) {
      return { error: error };
    }
  },
};
