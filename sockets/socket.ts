import { Socket } from "socket.io";

export const disconnect = (client: Socket) => {

    client.on('disconnect', () => {
        console.log("Client disconnected...");
    })

}

export const listenMessages = ( client: Socket ) => {

    client.on('message', (payload) => {
        console.log("Mensaje: ", payload);
    })

}