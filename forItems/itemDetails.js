const html = require("html-template-tag");

module.exports = (arr) => html `<!DOCTYPE html>
<html>
<head>
  <title>TUNE WORLD</title>
  <linke rel = "stylesheet" href = '/assets/styles.css'/>
</head>
<body>
   <div>
     <ul>
       ${arr.map(currVal=> html`
        <li>albums:${currVal.albums}</li>
        <li>age: ${currVal.age}</li>
        `)}
   
     </ul>
   </div>
 </body>
</html>`

