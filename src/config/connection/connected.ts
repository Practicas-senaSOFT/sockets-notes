//CONEXION A MONGODB
import mongoose, {connect} from 'mongoose';
//Document connect -> DB
// const DC = process.env.MONGO_DB;
// const HOST = process.env.MONGO_HOST;
// const PORT = process.env.MONGO_PORT;

const DC = 'demoSocketNote';
const HOST = 'localhost';
const PORT = 27017;
//Conexion
export const connectDB = async () => {
    try {
        console.log(`1) mongodb://${HOST}:${PORT}/${DC}`);
        console.log(`2) mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`);
        const db = await connect(`mongodb://${HOST}:${PORT}/${DC}`)
        console.log(`Connection successful NameDB: ${db.connection.db.databaseName}`);
    } catch (error) {
        console.error(`Error connected MongoDB: ${error}`);
    }
};
