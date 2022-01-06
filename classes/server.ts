import express from 'express';
import { SERVERT_PORT } from '../global/environment';
import SocketIO from 'socket.io';
import http from 'http';
import * as socket from '../sockets/socket';
export default class Server {

    private static _instance: Server;

    public app: express.Application;
    public port: number;

    public socketIO: SocketIO.Server;
    private httpServer: http.Server;

    private constructor() {
        
        this.app = express();
        this.port = SERVERT_PORT;
        this.httpServer = new http.Server( this.app );
        this.socketIO = SocketIO( this.httpServer, {
            cors: {
              origin: "*",
              methods: ["GET", "POST"]
            }
        });
        this.listenSockets();

    }

    public static get instance() {
        return this._instance || ( this._instance = new this() );
    }

    start(cb: Function) {
        this.httpServer.listen(this.port, cb)
    }

    private listenSockets() {

        console.log("Listening to sockets...");

        this.socketIO.on('connection', client => {
            console.log("New connected client...", client.id);
            socket.listenMessages( client, this.socketIO );
            socket.disconnect( client );
        })


    }

}