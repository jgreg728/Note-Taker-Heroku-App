// import dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");

// connect database
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "notes_DB"
});

connection.connect(err => {
  if (err) throw err;
  console.log(`Connected on ${connection.threadId}`);

  startNotes();
});

module.exports = connection;