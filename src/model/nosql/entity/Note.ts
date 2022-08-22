import { getModelForClass, prop } from '@typegoose/typegoose'
//Interface
import { DataNote } from '../../../interface/sockets';

export {prop} from '@typegoose/typegoose'

export class Note implements DataNote {
    
    //ID

    @prop({
        type:String,
        required:true
    })
    public title:string;

    @prop({
        type:String
    })
    public description:string;

    constructor(title:string,description:string){
        this.title = title;
        this.description = description;
    }
};

//Creamos el Modelo
const nodeModel = getModelForClass(Note);
export default nodeModel