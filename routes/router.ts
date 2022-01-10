import { Router, Request, Response } from 'express';
import Server from '../classes/server';

const router = Router();

router.post('/messages', (req: Request, res: Response ) => {

    const server = Server.instance;

    server.socketIO.emit('newMessage', res)

});

export default router;