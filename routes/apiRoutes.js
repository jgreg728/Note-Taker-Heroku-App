// import database connection from db folder
const db = require("../db/connection");

// export function that creates routes (will be imported/executed in server.js)
module.exports = function(app) {

  // GET route that finds all tables with allNotes = false and sends back as JSON
  app.get("/api/notes", function(req, res) {

    db.query("SELECT * FROM tables WHERE allNotes = false", (err, tableData) => {

      if (err) {
        console.log(err);
        return res.status(500).end();
      }
      // send array of tables back
      res.json(tableData);

    });

  });

  // GET route that finds all tables with allNotes = true and sends back as JSON
  app.get("/api/allnotes", function (req, res) {

    db.query("SELECT * FROM tables WHERE allNotes = true", (err, tableData) => {

      if (err) {
        console.log(err);
        return res.status(500).end();
      }
      // send array of tables back
      res.json(tableData);

    });

  });

  // POST route that takes in data from client (in req.body) and inserts into database
  app.post("/api/newnote", function(req, res) {

    // get post data from req.body
    const noteData = req.body;

    // query database to add submitted notes into the saved notes list
    db.query("SELECT * FROM tables WHERE allNotes = false", (err, tableData) => {

      if (tableData.length < 5) {
        noteData.allNotes = false;
      } 
      else {
        noteData.allNotes = true;
      }
    
      // insert note into "notes" table
      db.query("INSERT INTO tables SET ?", noteData, (err, insertResponse) => {

        if (err) {
          console.log(err);
          return res.status(500).end();
        }
        
        // send back message letting user know if they are on the waiting list or not
        res.json({allNotes: noteData.allNotes});
      });
    });
  });
}