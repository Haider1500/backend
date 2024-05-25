const router = require("express").Router();
const {
  getTask,
  createTask,
  getAllTask,
} = require("../controllers/taskController");

router.get("/getTask", getTask);
router.post("/createTask", createTask);
router.get("/getAllTask", getAllTask);

module.exports = router;
