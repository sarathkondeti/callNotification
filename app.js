var http=require('http');
var fs=require('fs');

const port=process.env.PORT || 5002;

var server = http.createServer((req,res)=>{

    fs.readFile("website/index.html", function (err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
    
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
