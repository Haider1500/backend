module.exports = {
  getUsers: (req, res) => {
    res.send({
      message: "Gets all users",
    });
  },
  createUser: (req, res) => {
    res.send({
      message: "Create a user",
    });
  },
};
