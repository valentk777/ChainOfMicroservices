const express = require("express");
const apiController = require("../controllers/messageController");

const router = express.Router();

router.post("/message", apiController.postMessage);

module.exports = router;