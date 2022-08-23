import { v4 } from 'uuid';
import { DataNote } from '../interface/sockets';
//MODEL CRUD
import { createNote } from '../model/nosql/Note/create';
import { deleteNote as delNote } from '../model/nosql/Note/delete';

export const saveDataNote = async (values:DataNote) => {
    //Obtenemos los datos
    //Validamos datos 
    // console.log(values);
    //Creamos id
    const createId:string = v4(); 
    const id:string = createId.split('-')[0];
    console.log('ID CREATED: ',id);  
    values.id = id;  
    //Enviamos a guardar
    return await createNote(values);
};

export const deleteNote = async (id:string):Promise<boolean> => {
    //validacion
    //Eliminacion
    return await delNote(id);
};