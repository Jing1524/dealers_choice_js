const path = require('path');

const express = require('express');
const { report } = require('process');
const e = require('express');

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
  let content = "";
  console.log("before if")
  
  if(parseInt(req.params.id) === 1){
    
    content = "John William Coltrane (September 23, 1926 – July 17, 1967) was an American jazz saxophonist and composer. Working in the bebop and hard bop idioms early in his career, Coltrane helped pioneer the use of modes and was at the forefront of free jazz. ";
    // console.log("here ");
  } else if(parseInt(req.params.id) === 2){
    content = "Thelonious Sphere Monk[2] (/θəˈloʊniəs/, October 10, 1917[3] – February 17, 1982) was an American jazz pianist and composer. He had a unique improvisational style and made numerous contributions to the standard jazz repertoire"
  } else if(parseInt(req.params.id) === 3){
    content = "Miles Dewey Davis III (May 26, 1926 – September 28, 1991) was an American trumpeter, bandleader, and composer. He is among the most influential and acclaimed figures in the history of jazz and 20th-century music. Davis adopted a variety of musical directions in a five-decade career that kept him at the forefront of many major stylistic developments in jazz."
  }
 
    res.send(`
      <html>
        <head>
        <link rel='stylesheet' href = '/assets/styles.css'/>
          
        </head>
        <body>
        <h1>TONE WORLD</h1>
       
        <div>
          ${content}
          
        
        </div>
        </body>
      </html>
    `);
});










const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`listen on port ${port}`));