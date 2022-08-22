import noteModel from '../entity/Note';

//Leer todas las notas
export const getFindAll = async () => {
    return await noteModel.find();
};