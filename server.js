require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
    res.send('Hello friend you are here')
})

app.listen(3000, () => console.log("server listening on Port 3000"))