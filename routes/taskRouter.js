const router = require("express").Router();
const { getTask } = require("../controllers/taskController");

router.get("/getTask", getTask);

module.exports = router;
