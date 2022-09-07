var express = require('express');
var app = express();
var PORT = 3000;
var a;
app.get('', function (req, res) {
    console.log(req.path);
    
  res.sendFile(__dirname + "/index.html");
  });
app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});