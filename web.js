const Koa=require('koa');
const port=3000;
const serve=require('koa-static');
const WebSocket=require("ws");
const app=new Koa();
//app.use(serve(__dirname+'../htdocs/webrtc'));
app.use(serve('web'));
const servak=app.listen(port);
/*
const wss=new WebSocket.Server({server: servak});

wss.on('connection', wss_connected);
function wss_connected(ws, uri){
console.log('new ws connection ',uri.url);
ws.on('message', ws_on_message);
ws.on('close', ws_on_close);
ws.on('error', ws_on_error);	
}
function ws_on_message(msg){console.log('msg: ',msg);}
function ws_on_close(){console.log('websocket closed');}
function ws_on_error(e){console.log('websocket error: ',e);}
*/ 
console.log(port);
// rawrtc-terminal 0

/* local parameters
 
{"iceParameters":{"usernameFragment":"k2gX","password":"l7JKYO7VShNO9g6bOEVVdOCA","iceLite":false},"iceCandidates":[{"foundation":"2433828439","component":"1","protocol":"udp","priority":2122260223,"ip":"10.34.32.145","port":45662,"type":"host"},{"foundation":"3750935207","component":"1","protocol":"tcp","priority":1518280447,"ip":"10.34.32.145","port":9,"type":"host","tcpType":"active"},{"foundation":"1728135043","component":"1","protocol":"udp","priority":1686052607,"ip":"217.118.83.129","port":28997,"type":"srflx","relatedAddress":"10.34.32.145","relatedPort":45662}],"dtlsParameters":{"role":"auto","fingerprints":[{"algorithm":"sha-256","value":"47:78:32:90:36:AB:2D:7F:B7:F1:CB:EC:8D:4B:ED:00:21:87:B1:F3:BA:10:E9:DA:1B:3D:A0:53:4E:A5:33:64"}]},"sctpParameters":{"maxMessageSize":16384,"port":5000}}

 
{"iceParameters":{"usernameFragment":"jREN","password":"xtsQ4h5kIRrmvopLqQ2o0G/1","iceLite":false},"iceCandidates":[{"foundation":"2433828439","component":"1","protocol":"udp","priority":2122260223,"ip":"10.34.32.145","port":32884,"type":"host"},{"foundation":"3750935207","component":"1","protocol":"tcp","priority":1518280447,"ip":"10.34.32.145","port":9,"type":"host","tcpType":"active"},{"foundation":"1728135043","component":"1","protocol":"udp","priority":1686052607,"ip":"217.118.83.129","port":30008,"type":"srflx","relatedAddress":"10.34.32.145","relatedPort":32884}],"dtlsParameters":{"role":"auto","fingerprints":[{"algorithm":"sha-256","value":"14:B0:16:63:55:97:A4:F7:51:D9:CA:5B:2A:04:DC:9B:89:47:BB:39:77:8D:4B:70:4B:D4:E3:61:88:AF:41:AD"}]},"sctpParameters":{"maxMessageSize":16384,"port":5000}}

 
 
 
*/ 





 * /
