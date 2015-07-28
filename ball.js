var net = require('net');
var port = 2500;


var eightBallArray = ["It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
]

var server = net.createServer(function(connection) {
    console.log("I'm connected")
    connection.on('data', function(dataFromClient) {
        connection.setEncoding("utf8")
        var randomAnswer = eightBallArray[Math.floor(Math.random()*eightBallArray.length)];
        connection.write(randomAnswer);

    })
})




server.listen(port, function() {
    console.log("Running and Listening " + port)
})