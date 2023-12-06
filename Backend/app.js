// requiring express module
const express = require("express");

// all express function in app
const app = express();

const bookRoute = require("./routes/booksRoutes");

// mongodb connection
require("./connection/conn.js");

// we create routes with the help of express

app.use(express.json());
app.use("/api/v1" , bookRoute);

app.get("/", (req, res) =>{
    res.send("Hello");
});

app.listen(3000, () => {
    console.log("SERVER STARTED SUCCESSFULLY");
});