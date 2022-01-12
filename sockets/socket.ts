import { Socket } from "socket.io";
import SocketIO from 'socket.io';
import { User } from "../classes/user";
import { UserList } from "../classes/user-list";

export const connectedUsers = new UserList();

export const connectUser = (client: Socket) => {
    
    const user = new User( client.id );
    connectedUsers.add( user );

}

export const disconnect = (client: Socket) => {
    client.on('disconnect', () => {
        console.log(`Client ${client.id} (${connectedUsers.getUser(client.id)?.name}) disconnected...`);
        connectedUsers.removeUser( client.id );
    })
}

export const listenMessages = ( client: Socket, socket: SocketIO.Server ) => {
    client.on('message', (payload: any) => {
        socket.emit('newMessage', payload);
    })
}

export const configUser = ( client: Socket, socket: SocketIO.Server ) => {
    
    client.on('config-user', (payload: any, callback: any ) => {

        connectedUsers.updateName( client.id, payload.name );

        callback({
            id: client.id,
            name: payload.name,
            ok: true
        })
    });
}