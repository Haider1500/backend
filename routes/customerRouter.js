const router = require("express").Router();
const {
  createCustomer,
  getCustomers,
} = require("../controllers/customerController");

router.get("/createCustomer", createCustomer);
router.put("/getCustomers", getCustomers);

module.exports = router;
