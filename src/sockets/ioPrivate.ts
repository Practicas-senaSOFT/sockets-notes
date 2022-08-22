//IMport socket
//Socket 1:1
import { Socket, Server, Namespace } from 'socket.io';

export const chatPrivateFuction = (sio:Server) => {

    //Asiganar nombre a que ruta esta dirigido
    const chatPrivate:Namespace = sio.of('/chatPrivate')
    //Conexion 
    .on('connection', (socket:Socket) => {
        console.log('User connected privated');
        //Desconexion
        socket.on('disconnect', ()=>{
            console.log('User Disconnect: ',socket.id);
        });
    });
};

// export {sio};