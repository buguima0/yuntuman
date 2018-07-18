 const server = require('ws').Server;
 const ws = new server({
   port: 8080
 });
 ws.on('connection', (wss) => {
  wss.send('链接成功');
   wss.on('message', (message) => {
     console.log(message);
     wss.send('前端传来得信息' + message)
   })
 })
