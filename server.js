var express = require("express");

// sets up the app
var app = express();
var PORT = process.env.PORT || 3000;

// express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// listening on the port
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});