require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(path.join("public")))

app.get("/", (req, res) => {
    res.sendFile("index.html");
})

app.listen(3000, () => console.log("server listening on Port 3000"))