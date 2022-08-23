import { NotStringTypeError } from '@typegoose/typegoose/lib/internal/errors';
import colors from 'colors';
//Import Sockets
import { Namespace,Server,Socket } from 'socket.io';
////
import { DataNote } from '../interface/sockets';
import { getNoteId, getNotesAll } from '../model/nosql/Note/read';
import { deleteNote, saveDataNote, updateNote } from '../services/noteData.service';

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
            const notes = await getNotesAll();
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
        //get note by id
        socket.on('client:note:getId', async (id:string) => {
            const note = await getNoteId(id);
            console.log(note);
            //Emitimos respuesta
            notePublic.emit('server:note:selected', note)
        });
        //Update note
        socket.on('client:note:update', async (data:DataNote) => {
            console.log('DATA Updating...',data);
            //actualizamos
            await updateNote(data);
            console.log(colors.yellow('Data Updated'));
            //Emitimos las notas actualizadas
            await emitNote();
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
