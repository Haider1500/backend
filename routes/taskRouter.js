const router = require("express").Router();
const {
  getTask,
  createTask,
  getAllTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");

router.get("/getTask", getTask);
router.post("/createTask", createTask);
router.get("/getAllTask", getAllTask);
router.delete("/deleteTask", deleteTask);
router.put("/updateTask", updateTask);

module.exports = router;
