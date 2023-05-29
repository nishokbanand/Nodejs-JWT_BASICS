const express = require("express");
const router = express.Router();
const { getDashboard, register } = require("../controllers/main");
const auth = require("../middleware/auth");
router.route("/dashboard").get(auth, getDashboard);
router.route("/login").post(register);

module.exports = router;
