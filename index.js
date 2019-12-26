var http=require('http');

var server=require('ws').Server;
var s=new server({port:5001});

s.on('connection',(ws)=>{
    ws.on('message',(message)=>{
        console.log('Received: ' + message);
        ws.send('hello dear..');
    });

});


http.createServer((req,res)=>{
    s.clients.forEach((client)=>{
        console.log('Msg sent to browser..');
        client.send('You got a call..');
    });
    res.write('Server has received your msg..');
    res.end();
}).listen(5002);
