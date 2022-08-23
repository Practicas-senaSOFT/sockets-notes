import noteModel from '../entity/Note';

//Leer todas las notas
export const getNotesAll = async () => {
    return await noteModel.find();
};
//Leer nota por id
export const getNoteId = async (id:string) => {
    return await noteModel.findOne({id:id});
};