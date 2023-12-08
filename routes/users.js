const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { routes } = require("../app");

router.get("/", userController.mainPage);

router.get("/words",userController.words)

router.get("/sentences",userController.sentences)


module.exports = router;
