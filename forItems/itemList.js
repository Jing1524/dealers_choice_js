const html = require("html-template-tag");

module.exports = (array) => html `<!DOCTYPE html>
 <html>
 <head>
 <link rel='stylesheet' href = '/assets/styles.css'/>
 </head>
 <body>
   <h1>TUNE WORLD</h1>
       
   <div>
     <ul>
      ${array.map(currVal => html`
       <li><a href = "/musician/${currVal.id}">${currVal.name}</a></li> 
       `)}
    </ul>
</div>
</body>
</html>`