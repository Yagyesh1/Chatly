import express from "express"
import { createServer } from "http"
import { Server } from "socket.io";

const app = express();
const server = createServer(app);

const io = new Server(server, {
    cors : {
        origin : 'http://localhost:5173',
        credentials: true
    }
})
interface onlineUserType{
    [userId: string] : string;
}
const onlineUser: onlineUserType = {}
io.on('connection', (socket)=>{
   console.log("a user connected successfully", socket.id)

   const userId = socket.handshake.query.id

   if(userId && typeof userId === "string") onlineUser[userId] = socket.id

   io.emit('getOnlineUsers', Object.keys(onlineUser))

   socket.on('disconnect', ()=>{
    console.log("A user disconnected", socket.id);
    if(userId && typeof userId == 'string') delete onlineUser[userId]
    io.emit('getOnlineUsers', onlineUser)
   })
})

export {io, app, server}