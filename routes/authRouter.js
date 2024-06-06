const { login, logout } = require("../controllers/authController");

const router = require("express").Router();

router.post("/login", login);
router.get("/logout", logout);

module.exports = router;
