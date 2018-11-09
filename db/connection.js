// import dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");

// connect database
const connection = mysql.createConnection({
  host: "u28rhuskh0x5paau.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "jybpqsn7dif8smi6",
  password: "vuebrhrtqm4haaxh",
  database: "ca7cgyx5lzo0d5dl"
});

connection.connect(err => {
  if (err) throw err;
  console.log(`Connected on ${connection.threadId}`);

  // startNotes();
});

module.exports = connection;