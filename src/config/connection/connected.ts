//CONEXION A MONGODB
import mongoose, {connect} from 'mongoose';
//Document connect -> DB
const DC = process.env.MONGO_DB;
const HOST = process.env.MONGO_HOST;
const PORT = process.env.MONGO_PORT;

//Conexion
export const connectDB = async () => {
    try {
        const db = await connect(`mongodb://${HOST}:${PORT}/${DC}`)
        console.log(`Connection successful NameDB: ${db.connection.db.databaseName}`);
    } catch (error) {
        console.error(`Error connected MongoDB: ${error}`);
    }
};
