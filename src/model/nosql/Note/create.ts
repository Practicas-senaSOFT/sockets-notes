import { DataNote } from '../../../interface/sockets';
import noteModel from '../entity/Note';

//Create Note
export const createNote = async (values:DataNote) => {
    let note;
    try {
        const resultNote = new noteModel({
            id:values.id,
            title:values.title,
            description:values.description
        });
        note = await resultNote.save();
        console.log(note);
    } catch (error) {
        console.error(`ERROR:SAVING DATA: ${error}`)
        return false;
    }
    return note;
};