module.exports = {
  createAdmin: (req, res) => {
    return res.send({
      message: "Created new Admin",
    });
  },
  updateAdmin: (req, res) => {
    return res.send({
      message: "Admin has been successfully updated!",
    });
  },
};
