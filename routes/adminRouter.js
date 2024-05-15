const router = require("express").Router();
const { createAdmin, updateAdmin } = require("../controllers/adminController");

router.get("/createAdmin", createAdmin);
router.put("/updateAdmin", updateAdmin);

module.exports = router;
