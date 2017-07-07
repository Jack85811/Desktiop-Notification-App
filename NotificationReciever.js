var express = require("express");
app = express();
var queue = require('express-queue');
var pathToSound = 'E:/Development/NodeJS/Desktiop-Notification-App/post.wav';



app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.post("/playSound", function (req, res){
    var player = require('play-sound')({player: "C:/Program Files (x86)/Windows Media Player/wmplayer.exe" })

    player.play(pathToSound, { afplay: ['-v', 1 ] /* lower volume for afplay on OSX */ }, function(err){
      if (err) throw err
    })
    res.sendStatus(200);
});

// Start server
var port= 8080;
app.listen(port);
console.log("Server running at http://localhost:" + port );
