import * as http from 'http';
import { startServer } from './app';
import { Server, Socket } from 'socket.io';

async function main() {
    const port = process.env.PORT || 3000
    const app = await startServer();
    const server = http.createServer(app);
    const io = new Server(server);

    io.on('connection', (socket: Socket) => {
        console.log('Socket inicializado.');
    });

    server.listen(port, () => {
        console.log('Servidor en puerto: '+port);
    });
}

main();