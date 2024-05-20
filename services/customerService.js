const { createCustomer } = require("../models/customerModel");

module.exports = {
  createCustomer: (customer) => {
    try {
      const response = createCustomer(customer);
      return responses;
    } catch (error) {
      return error;
    }
  },
};
