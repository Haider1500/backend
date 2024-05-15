const router = require("express").Router();
const { getUsers, createUser } = require("../controllers/userController");

router.get("/getUsers", getUsers);
router.get("/createUser", createUser);

module.exports = router;
