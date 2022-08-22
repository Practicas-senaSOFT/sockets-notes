//Importamos sockets.io
import { Server } from 'socket.io';
//Interface
import { chatPublicFuction } from './ioPublic';


//Creamos los sockets
const createSocketIoServer = () : Server => {
    const io:Server = new Server();
    // console.log('io:: ',io._parser);
    return io;
};
//Create server
const sio:Server = createSocketIoServer();

//Llamamos funciones
chatPublicFuction(sio)

export {sio};