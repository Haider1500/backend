const joi = require("joi");
const sessionService = require("../services/sessionService");

const getSessionSchema = joi.object().keys({
  sessionId: joi.string().required(),
});
const deleteSessionSchema = joi.object().keys({
  sessionId: joi.string().required(),
});
const createSessionSchema = joi.object().keys({
  userId: joi.string().required(),
});

module.exports = {
  getSession: async (req, res) => {
    try {
      const validate = await getSessionSchema.validateAsync(req.query);
      const session = await sessionService.getSession(validate.sessionId);
      return res.send({ response: session.response });
    } catch (error) {
      return res.send({ error });
    }
  },
  createSession: async (req, res) => {
    try {
      const validate = await createSessionSchema.validateAsync(req.body);
      //   console.log("first");
      const session = await sessionService.createSession(validate);
      //   console.log("session", session);
      if (session.error) {
        return res.send({
          error: session.error,
        });
      }
      return res.send({
        message: "session created!",
        response: session.response,
      });
    } catch (error) {
      return res.send({ error: error.message });
    }
  },

  deleteSession: async (req, res) => {
    try {
      const validate = await deleteSessionSchema.validateAsync(req.query);
      const session = await sessionService.deleteSession(validate.sessionId);
      if (session.error) {
        return res.send({ error: session.error });
      }
      return res.send({ response: session.response });
    } catch (error) {
      return res.send({ error: error.message });
    }
  },
};
