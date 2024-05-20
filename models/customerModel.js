module.exports = {
  createCustomer: (customer) => {
    try {
      const customer = customer;
      return { response: customer };
    } catch (error) {
      return { error: error };
    }
  },
};
