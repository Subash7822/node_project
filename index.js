const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors({ origin: "*", methods: "GET,HEAD,PUT,PATCH,POST,DELETE" }));
app.options("*", cors());
app.use(express.json({ limit: "50mb" }));

app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.json("Welcome To 42andmore");
});
const port = 6000
app.listen(port, () => {
    console.log("server up and running on PORT :", port);
});