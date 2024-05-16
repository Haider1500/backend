module.exports = {
  createCustomer: (req, res) => {
    res.send({
      message: "Created new customer",
    });
  },
  getCustomers: (req, res) => {
    res.send({
      message: "All customers!",
    });
  },
};
