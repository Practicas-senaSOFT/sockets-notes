//Import Sockets
import { Namespace,Server,Socket } from 'socket.io';
import { DataNote } from '../interface/sockets';
import { getFindAll } from '../model/nosql/Note/read';

export const chatPublicFuction = (sio:Server) => {
    const notePublic:Namespace = sio.of('/chat')
    //Nos conectamos
    .on('connection', async (socket:Socket) => {
        console.log('User connected');
        // sabemos que usuario-ID esta conectado
        const data = {
            socketID: socket.id,
        }
        console.table(data);

        //obtenemos todas las notas
        const emitNote = async () => {
            const notes = await getFindAll();
            console.log(`Notes: ${notes.length}`);
            //Pasamos las notas encotradas
            notePublic.emit('notes:load', notes)
        };
        
        emitNote();

        //Socket -> Es con que obtenemos los eventos del Cliente o datos, EJ: 'chat:menssage' (Data)=>{}
            //Obtenemos los datos de chat:message
        socket.on('disconnect', async () => {
            console.log('User disconnect: ',socket.id);
        });
        // Obtenemos datos
        socket.on('chat:send_menssage', async (data) => {
            console.log('iD->',socket.id,' Dato: ',data);
            data = {...data,id:socket.id}
            // menssages.push(data);
            //Emitimos el mensaje obtenido
            notePublic.emit('chat:on_menssage', data)
            // console.table(menssages);
        });

        //Crear nota
        socket.on('create:note', (data:DataNote) => {

        });
    });
};
