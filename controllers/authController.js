module.exports = {
  login: (req, res) => {
    try {
      res.send("");
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
