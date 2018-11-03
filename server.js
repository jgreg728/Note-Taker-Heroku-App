// import dependencies
const express = require("express");

// set up express app & PORT
const app = express();
const PORT = 3000;

// set up express middleware to handle incoming data (POST data)
app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});