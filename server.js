const path = require('path');

const express = require('express');

const app = express();

app.use(require('morgan')('dev'));

app.use('/assets',express.static(path.join(__dirname,'assets')));




app.get('/',(req, res, next)=>{
    res.send(`
      <html>
        <head>
        <link rel='stylesheet' href = '/assets/styles.css'/>
          
        </head>
        <body>
        <h1>TONE WORLD</h1>
       
        <div>
          <ul>
          <li><a href ='/musician/1'>John Coltrane</a></li>
          <li><a href ='/musician/2'>Thelonious Monk</a></li>
          <li><a href ='/musician/3'>Miles Davis</a></li>
          </ul>
        </div>
        </body>
      </html>
    `);
});

app.get('/musician',(req, res, next)=>{
    res.send(`
      <html>
        <head>
        <link rel='stylesheet' href = '/assets/styles.css'/>
          
        </head>
        <body>
        <h1>TONE WORLD</h1>
        
        <div>
          <ul>
          <li><a href ='/musician/1'>John Coltrane</a></li>
          <li><a href ='/musician/2'>Thelonious Monk</a></li>
          <li><a href ='/musician/3'>Miles Davis</a></li>
          </ul>
        
        </div>
        </body>
      </html>
    `);
});

app.get('/musician/:id',(req, res, next)=>{
    res.send(`
      <html>
        <head>
        <link rel='stylesheet' href = '/assets/styles.css'/>
          
        </head>
        <body>
        <h1>TONE WORLD</h1>
       
        <div>
          
           info about musicians ${req.params.id}
          
        
        </div>
        </body>
      </html>
    `);
});










const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`listen on port ${port}`));