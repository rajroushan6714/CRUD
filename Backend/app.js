// requiring express module
const express = require("express");

// all express function in app
const app = express();

// mongodb connection
require("./connection/conn.js");

// we create routes with the help of express
app.get("/", (req, res) =>{
    res.send("Hello");
});

app.listen(1000, () => {
    console.log("SERVER STARTED SUCCESSFULLY");
});