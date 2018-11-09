// import dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");

// connect database
const connection = mysql.createConnection({
  host: "localhost",
  port: 3000,
  user: "root",
  password: "",
  database: "notes_db"
});

connection.connect(err => {
  if (err) throw err;
  console.log(`Connected on ${connection.threadId}`);

  startNotes();
});

module.exports = connection;