const { login: loginCon, logout } = require("../controllers/authController");

const router = require("express").Router();

router.get("/login", loginCon);
router.get("/logout", logout);

module.exports = router;
