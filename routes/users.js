const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.mainPage);

module.exports = router;
