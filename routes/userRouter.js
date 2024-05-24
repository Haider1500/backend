const router = require("express").Router();
const {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getAllUser,
} = require("../controllers/userController");

router.get("/getUser", getUser);
router.get("/getAllUser", getAllUser);
router.post("/createUser", createUser);
router.put("/updateUser", updateUser);
router.delete("/deleteUser", deleteUser);

module.exports = router;
