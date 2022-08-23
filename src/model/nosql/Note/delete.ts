import noteModel from '../entity/Note';

export const deleteNote = async (id:string):Promise<boolean> => {
    try {
        await noteModel.findOneAndDelete({id});
    } catch (error) {
        console.log(`ERROR:DELETED NOTE: ${error}`);
        return false;
    }
    return true;
};