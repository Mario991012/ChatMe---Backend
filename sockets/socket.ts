import { Socket } from "socket.io";
import SocketIO from 'socket.io';

export const disconnect = (client: Socket) => {
    client.on('disconnect', () => {
        console.log("Client disconnected...");
    })
}

export const listenMessages = ( client: Socket, socket: SocketIO.Server ) => {
    client.on('message', (payload) => {
        socket.emit('newMessage', payload);
    });
}