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
var browsyws = null;
wss.on('connection',(ws)=>{
    ws.on('message',(message)=>{
        console.log('Received: ' + message);
        var msg = message.split(" ");
        if(msg[0]=="android"){
            var res = "call " + msg[1] + " " + msg[2];
            ws.send("alright! I'll let browsy know..");
            if(browsyws!=null){
                browsyws.send(res);
            }
        }else if(msg[0]=="browsy"){
            ws.send('hello browsy');
            browsyws=ws;
        }else if(msg[0]=="testing"){
            ws.send("You are gud!");
        }
        //ws.send('hello dear..');
    });

});
