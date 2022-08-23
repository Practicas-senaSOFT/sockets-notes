import colors from 'colors';
//Import Sockets
import { Namespace,Server,Socket } from 'socket.io';
////
import { DataNote } from '../interface/sockets';
import { getFindAll } from '../model/nosql/Note/read';
import { deleteNote, saveDataNote } from '../services/noteData.service';

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
            console.log(`Length Notes: ${notes.length}`);
            // notes.forEach(note => console.log(note.id));
            //Pasamos las notas encotradas
            notePublic.emit('server:notes:load', notes)
        };
        //se llama la funcion
        await emitNote();

        //Socket -> Es con que obtenemos los eventos del Cliente o datos, EJ: 'chat:menssage' (Data)=>{}
            //Obtenemos los datos de chat:message
        socket.on('disconnect', async () => {
            console.log('User disconnect: ',socket.id);
        });
        //Create Note
        socket.on('client:note:create', async (data:DataNote) => {
            //Create note
            const result = await saveDataNote(data);
            //Emitimos al Cli la nota creada
            notePublic.emit('server:notes:new', result)
        });

        //Delete Note
        socket.on('client:note:delete', async (data:string)=>{
            console.log(colors.blue(`ELIMINADO: ${data}`));
            const result:boolean = await deleteNote(data);
            //Emitimos respuesta
            //Emitimos las notas totales
            await emitNote();
        });
    });
};
