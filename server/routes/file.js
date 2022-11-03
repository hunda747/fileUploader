const express = require("express");
const router = express.Router();
const multer = require("multer");

const {
  addFile,
  getAllFile,
  deleteFile,
} = require("../controller/fileController");

router.get("/", (req, res) => res.send("file"));
router.post("/addFile", addFile);
router.get("/getFiles", getAllFile);
router.delete("/deleteFile", deleteFile);

module.exports = router;
