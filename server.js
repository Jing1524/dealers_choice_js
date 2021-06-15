const express = require('express');
const app = express();
const db = require('./db');
const {models: { Musician, Album, Bio}} = db;


app.get("/musicians", async(req,res,next)=>{
    try{
      res.send(await Musician.findAll());
    }
    catch(err){
        next(err);
    }
})

app.get("/albums", async(req,res,next)=>{
    try{
      res.send(await Album.findAll());
    }
    catch(err){
        next(err);
    }
})


const init = async()=> {
    try{
      await db.syncAndSeed();
      const port = process.env.PORT || 3000;
      app.listen (port, ()=> console.log(`listening on port ${port}`));

    }
    catch(ex){
        console.log(ex);
    }
}

init();