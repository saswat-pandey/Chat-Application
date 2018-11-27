const path= require('path');
const express= require('express');
const port=process.env.PORT||5000;
const publicpath=path.join(__dirname,"../public");
const socketIO= require('socket.io');
const http=require('http');
const app=express();
const server=http.createServer(app);
const io =socketIO(server);

app.use(express.static(publicpath));

io.on("connection",(socket)=>{
  console.log("New user Connected");

socket.on("createMsg",(msg)=>{
  io.emit("NewMessage",{
   from:msg.from,
   text:msg.text,
   createdAt:new Date().getTime()

  });
});

  socket.on("disconnect",()=>{
    console.log("Disconnnected with the client");
  });
});



server.listen(port,()=>{
  console.log(`Successfully connected to port:${port}`);
});
