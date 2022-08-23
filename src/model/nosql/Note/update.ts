import { DataNote } from '../../../interface/sockets';
import noteModel from '../entity/Note';


export const update = async (values:DataNote):Promise<boolean> => {
    try {
        const r = await noteModel.findOneAndUpdate({id:values.id},{
            title: values.title,
            description: values.description
        });
        console.log('PUT:: ',r);
    } catch (error) {
        console.error(`ERROR:Updating note: ${error}`);
        return false;
    }
    return true;
};