var express = require("express");
var serveStatic = require("serve-static");
var port = process.env.PORT || 5000;

app = express();
app.use(serveStatic(__dirname));

app.listen(port);
console.log("server started " + port);
