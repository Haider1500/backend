module.exports = {
  login: (req, res) => {
    console.log(req.query, "query");
    console.log(req.body, "body");
    return res.send({
      message: "logged in as user",
      data: req.query,
      age: req.body.age,
    });
  },
  logout: (req, res) => {
    res.send({
      message: "logged out",
    });
  },
};
