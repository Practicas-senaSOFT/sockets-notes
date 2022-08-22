//CONEXION A MONGODB
import mongoose, {connect} from 'mongoose';
//Document connect -> DB
const DC = 'demoSocketNote';
const HOST = 'localhost';
const PORT = '27017';

//Conexion
export const connectDB = async () => {
    try {
        const db = await connect(`mongodb://${HOST}:${PORT}/${DC}`)
        console.log(`Connection successful NameDB: ${db.connection.db.databaseName}`);
    } catch (error) {
        console.error(`Error connected MongoDB: ${error}`);
    }
};
