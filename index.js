var http=require('http');

// var server=require('ws').Server;
// var wsport=process.env.PORT || 5001
// var s=new server({port:wsport});
//
// s.on('connection',(ws)=>{
//     ws.on('message',(message)=>{
//         console.log('Received: ' + message);
//         ws.send('hello dear..');
//     });
//
// });

const httpport = process.env.PORT || 3000
http.createServer((req,res)=>{
    s.clients.forEach((client)=>{
        console.log('Msg sent to browser..');
        client.send('You got a call..');
    });
    res.write('Server has received your msg..');
    res.end();
}).listen(httpport,()=>{
    console.log('http listing on '+httpport);
});
