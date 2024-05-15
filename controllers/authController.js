module.exports = {
  login: (req, res) => {
    return res.send({
      message: "logged in as user",
    });
  },
  logout: (req, res) => {
    res.send({
      message: "logged out",
    });
  },
};
