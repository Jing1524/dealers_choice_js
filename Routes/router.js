const router = require("express").Router();
// console.log(router);

const client = require("../db"); //talking to database

const itemDetails = require("../forItems/itemDetails");
const itemList = require("../forItems/itemDetails");





router.get('/',async(req, res, next)=>{
    try {
        const data = await client.query('SELECT * FROM musicians');
        const array = data.rows;
        res.send(itemList(array));
        
    } catch (err){
        res.send(`Somthing went Wrong: ${err}`);
    }
    // const data = await client.query('SELECT * FROM musicians');
    
    // const arr = data.rows;
    // console.log(arr);
    
    // res.send(`
    //   <html>
    //     <head>
    //     <link rel='stylesheet' href = '/assets/styles.css'/>
          
    //     </head>
    //     <body>
    //     <h1>TUNE WORLD</h1>
       
    //     <div>
    //       <ul>
    //       ${arr.map(currVal =>
    //         `<li><a href = "/musician/${currVal.id}">${currVal.name}</a></li>` 
    //         ).join('')}
    //       </ul>
    //     </div>
    //     </body>
    //   </html>
    // `);
});


router.get('/:id',async(req, res, next)=>{
    try{
      const data = await client.query('SELECT * FROM musicians WHERE musicians.id = $1',[req.params.id]);
      const arr = data.rows;
      res.send(itemDetails(arr));
      // console.log(arr);
    } catch (error){
      res.send(`something when wrong: ${error}`);
    }
  
    // const data = await client.query('SELECT * FROM musicians WHERE musicians.id = $1',[req.params.id]);
    // const arr = data.rows;
    // console.log(arr);
    // res.send(`
    //   <html>
    //     <head>
    //       <link rel='stylesheet' href = '/assets/styles.css'/>
    //     </head>
    //     <body>
    //     <h1>TUNE WORLD</h1>
    //     <div>
    //     <ul>
    //      ${arr.map(currVal=>
    //       `<li>albums:${currVal.albums}</li>
    //        <li>age: ${currVal.age}</li>`
    //        ).join('')}
           
    //     </ul>
    //     </div>
    //     </body>
    //   </html>
    
    
    // `);
  });

  module.exports = router;