const express = require('express');
const app = express();
const userRoutes = require("./server/routes/user");

const notesRoutes = require("./server/routes/note");

app.use(express.json());

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-with, Content-Type,Accept, Authorization");
    res.header("Access-Control-Allow-Methods","GET,POST,PUTDELETE,OPTIONS");
    next();
});

app.use("/users", userRoutes);

app.use("/notes", notesRoutes);
const Port = process.env.Port || 3000;
app.listen(Port, () => console.log(`Server started on port ${Port}!`));