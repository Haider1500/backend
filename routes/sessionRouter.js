const router = require("express").Router();
const {
  getSession,
  createSession,
  deleteSession,
} = require("../controllers/sessionController");

router.get("/getSession", getSession);
router.post("/createSession", createSession);
router.delete("/deleteSession", deleteSession);

module.exports = router;
