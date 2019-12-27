var http=require('http');
var fs=require('fs');

const httpport = process.env.PORT || 5002;
// const wsport=process.env.PORT || 5002;

http.createServer((req,res)=>{

    if(req.url=='/ws'){
        fs.readFile("website/index.html", function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.write('<h1>wsport '+wsport+'</h1>');
            res.end();
        });
        return;
    }else if(req.url=='/http'){
        // s.clients.forEach((client)=>{
        //     console.log('Msg sent to browser..');
        //     client.send('You got a call..');
        // });
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>wsport '+wsport+'</h1>');
    res.write('<h1>httpport '+httpport+'</h1>');

    res.end('<h1>Your msg has been received..</h1>');

}).listen(httpport,()=>{
    console.log('http listing on '+httpport);
});

// var wsserver=require('ws').Server;
// var s=new wsserver({port:wsport});
//
// s.on('connection',(ws)=>{
//     ws.on('message',(message)=>{
//         console.log('Received: ' + message);
//         ws.send('hello dear..');
//     });
//
// });
