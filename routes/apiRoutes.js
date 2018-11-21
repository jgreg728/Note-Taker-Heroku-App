// 
// 
// import database connection from db folder
const db = require("../db/connection.js");

// export function that creates routes (will be imported/executed in server.js)
module.exports = function(app) {

  // GET route that finds all tables with allNotes = false and sends back as JSON
  app.get("/api/notes", function(req, res) {

    db.query("SELECT * FROM notes", (err, tableData) => {

      if (err) {
        console.log(err);
        return res.status(500).end();
      }
      // send array of notes back
      res.json(tableData);
    });

  });

  // GET route that finds all notes with allNotes = true and sends back as JSON
  // app.get("/api/allnotes", function (req, res) {

  //   db.query("SELECT * FROM notes WHERE allNotes = true", (err, tableData) => {

  //     if (err) {
  //       console.log(err);
  //       return res.status(500).end();
  //     }
  //     // send array of tables back
  //     res.json(tableData);

  //   });

  // });

  // POST route that takes in data from client (in req.body) and inserts into database
  app.post("/api/notes", function(req, res) {

    // get post data from req.body
    const noteData = req.body;

    // query database to add submitted notes into the saved notes list
    db.query("SELECT * FROM notes", (err, tableData) => {

      db.query("INSERT INTO notes SET ?", noteData, (err, noteData) => {

        if (err) {
          console.log(err);
          return res.status(500).end();
        }
        
        // send back message letting user know if they are on the waiting list or not
        res.json({allNotes: noteData.allNotes});
      });
    });
  });
  
  // DELETE route
  app.delete("/api/notes/:id", function(req, res) {
    // // get post data from req.body
    const deleteId = req.params.id;
    console.log("look here", deleteId);
    // query database to delete submitted notes
    db.query("SELECT * FROM notes", (err, tableData) => {

      db.query("DELETE FROM notes WHERE id = ?", deleteId, (err, deleteId) => {
        if (err) {
          console.log(err);
          return res.status(500).end();
        }
        res.json(deleteId)
      });
    });
  });


}