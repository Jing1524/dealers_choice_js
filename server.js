// const client = require("./db");

const path = require('path');

const express = require('express');
// const { report } = require('process');
// const e = require('express');

const app = express();

// app.use(require('morgan')('combined'));

app.use('/assets',express.static(path.join(__dirname,'assets')));

app.use('/musician',require('./Routes/router'));

app.get("/", (req, res)=>{
  res.redirect("/musician");
})  //reroute the page to each item detail page







const port = 3000;

app.listen(port, ()=> console.log(`listen on port ${port}`));