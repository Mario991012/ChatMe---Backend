import Server from "./classes/server";
import router from "./routes/router";
import bp from 'body-parser';
import cors from 'cors';

const server = Server.instance;
var CORS_CONFIG = require('./config/cors.conf');

server.app.use( bp.urlencoded({ extended: true }));
server.app.use( bp.json() );

server.app.use( cors({ origin: true, credentials: true }) )

server.app.use('/', router)

server.start( () => {
    console.log(`Server running on port ${server.port}...`);
})