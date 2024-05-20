const { hash } = require("bcryptjs");

let users = [
  { username: "Ali", age: "12", password: "asfsfwoif", id: 12345 },
  { username: "sajjad", age: "21", password: "dfklewe12", id: 12346 },
  { username: "Ammar", age: "18", password: "fsdfkle", id: 12347 },
];

module.exports = {
  createUser: async (user) => {
    try {
      user.password = await hash(user.password, 10);
      delete user.confirmPassword;
      return [...users, user];
    } catch (error) {
      error: error;
    }
  },
};
