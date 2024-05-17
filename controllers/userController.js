const joi = require("joi");

let users = [
  { username: "Ali", age: "12", password: "asfsfwoif", id: 12345 },
  { username: "sajjad", age: "21", password: "dfklewe12", id: 12346 },
  { username: "Ammar", age: "18", password: "fsdfkle", id: 12347 },
];

const createUserSchema = joi.object().keys({
  username: joi.string().required(),
  age: joi.string().required(),
  password: joi.string().min(3).max(20).required(),
  id: joi.string().min(3).required(),
});
const updateUserSchema = joi.object().keys({
  username: joi.string(),
  age: joi.string(),
  password: joi.string().min(3).max(20),
  id: joi.required(),
});
const deleteUserSchema = joi.object().keys({
  id: joi.required(),
});

module.exports = {
  getUsers: (req, res) => {
    res.send({
      message: "success",
      data: users,
    });
  },
  createUser: async (req, res) => {
    try {
      console.log(req.body);
      const validate = await createUserSchema.validateAsync(req.body);
      users = [...users, validate];
      console.log(req.body);
      res.send({
        message: "Created a new user!",
        data: users,
      });
    } catch (error) {
      res.send({
        message: error.message,
      });
    }
  },
  updateUser: async (req, res) => {
    try {
      const validate = await updateUserSchema.validateAsync(req.body);
      //updating the array of users
      console.log(validate, "validate");
      users = users.map((u) => {
        if (validate.id === u.id) {
          return { ...u, ...validate };
        }
        return u;
      });
      res.send({
        message: "successfully updated",
        data: users,
      });
    } catch (error) {
      res.send({ message: error.message });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const validate = await deleteUserSchema.validateAsync(req.query);
      users = users.filter((u) => u.id.toString() !== validate.id);
      res.send({
        message: `Delete this id: ${req.query.id}`,
        data: users,
      });
    } catch (error) {
      res.send({ message: error.message });
    }
  },
};
