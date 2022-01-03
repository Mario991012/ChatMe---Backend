import express from 'express';
import { SERVERT_PORT } from '../global/environment';

export default class Server {

    public app: express.Application;
    public port: number;

    constructor() {
        
        this.app = express();
        this.port = SERVERT_PORT;
    }

    start(cb: Function) {
        this.app.listen(this.port, cb)
    }

}