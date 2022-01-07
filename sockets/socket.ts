import { Socket } from "socket.io";
import SocketIO from 'socket.io';

export const disconnect = (client: Socket) => {
    client.on('disconnect', () => {
        console.log("Client disconnected...");
    })
}

export const listenMessages = ( client: Socket, socket: SocketIO.Server ) => {
    client.on('message', (payload: any) => {
        socket.emit('newMessage', payload);
    })
}

export const configUser = ( client: Socket, socket: SocketIO.Server ) => {
    
    client.on('config-user', (payload: any, callback: any ) => {
        console.log("login recibido", payload)
        callback({
            id: client.id,
            name: payload.name,
            ok: true
        })
    });
}