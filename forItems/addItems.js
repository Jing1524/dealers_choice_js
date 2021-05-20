const html = require("html-template-tag");

module.exports = (router) => `<!DOCTYPE html>
   <html>
      <head>
         <title>Jazz Musicians</title>
         <link rel='stylesheet' href = '/assets/styles.css'/>
      </head>
      <body>
        <div class = "musician-list">
        <form method = "post" action = "/posts"> ?
          <label for = "name">Musician</label>
          <input type = "text" name = "name" />
          <label for = "albums">Albums</label>
          <input type = "text" name = "albums" />
          <button type = "submit">Submit</button>
        </form>

        </div>
      </body>
    
      </html>










`