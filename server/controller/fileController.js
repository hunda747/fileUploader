const db = require("../config/dbConn");
const File = require("../model/file");
const multer = require("multer");
const fileUpload = require("express-fileupload");

const addFile = async (req, res) => {
  console.log("inside");
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  console.log("file");
  // console.log(req.body);
  // console.log(req.files.file);
  const file = req.files.file;
  console.log(file);

  const name = file.name;
  const size = file.size;
  const date = new Date();
  console.log(name);
  File.create({
    file,
    file_name: name,
    size,
    date,
  })
    .then((file) => {
      console.log("file:" + file);
      res.status(200).send(file);
    })
    .catch((err) => res.status(401).send(err));
};

const getAllFile = async (req, res) => {
  console.log("in appi get product");
  File.findAll()
    .then((file) => {
      console.log("file:" + file);
      res.send(file);
    })
    .catch((err) => res.send(err));
};

const deleteFile = async (req, res) => {
  console.log("in appi get delte");
  const id = req.body.id;
  File.destroy({ where: { id: id } })
    .then((file) => {
      console.log("file:" + file);
      res.sendStatus(200);
    })
    .catch((err) => res.send(err));
};

module.exports = {
  addFile,
  getAllFile,
  deleteFile,
};
