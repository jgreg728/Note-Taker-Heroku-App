// import path module
const path = require("path");

// export function that creates routes (will be imported/executed in server.js)
module.exports = function(app) {

  // set up GET route to serve home page
  app.get("/", function(req, res) {
    // send home page back to client
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // set up GET route for submitting new notes
  app.get("/submitnotes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
}