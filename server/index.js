const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./config/dbConn");
const fileUpload = require("express-fileupload");
const fileRoutes = require("./routes/file");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

db.authenticate()
  .then(() => console.log("Database connect ..."))
  .catch((err) => console.log("Error: " + err));

app.get("/", (req, res) => res.send("indeEX"));
app.use("/upload", fileRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started on port ${PORT}`));
