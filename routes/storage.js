const express = require("express");
const router = express.Router();
// Controllers
const { uploadFile } = require("../controllers/storage");
// Helpers
const uploadMiddleware = require("../utils/handleStorage");

router.post("/", uploadMiddleware.single("file"), uploadFile);

module.exports = router;
