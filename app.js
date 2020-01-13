var http=require('http');
var fs=require('fs');

const port=process.env.PORT || 5002;

var server = http.createServer((req,res)=>{

    if(req.url=='/ws'){
        fs.readFile("website/index.html", function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
        return;
    }else if(req.url=='/http'){
        s.clients.forEach((client)=>{
            console.log('Msg sent to browser..');
            client.send('You got a call..');
        });
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>httpport '+port+'</h1>');

    res.end('<h1>Your msg has been received..</h1>');

})
server.listen(port,()=>{
    console.log('http listing on '+port);
});

var wsserver=require('ws').Server;
var wss=new wsserver({server:server});

wss.on('connection',(ws)=>{
    ws.on('message',(message)=>{
        console.log('Received: ' + message);
        ws.send('hello dear..');
    });

});
