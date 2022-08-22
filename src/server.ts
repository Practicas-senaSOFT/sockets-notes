// Impotamos app
import app from './app';
//Importamos http ya que es necesario para Sockets
import http from 'http';
//Import DB 
import {connectDB} from './config/connection/connected';
//Conectar DB
// connectDB();
////////////////////////
//Sockets
import {sio} from './sockets/io';
// import { attachs } from './sockets';

const main = async ():Promise<void> => {
    //Creamos el server 
    const server:http.Server = http.createServer(app);
    //PORT
    const PORT:string|number = process.env.PORT || 3000; 
    //Usamos los socket.attach
    // attachs(server);
    sio.attach(server, {
        cors:{
            origin: "http://localhost:3000",
            methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD"],
            credentials: true,
        }
    });
    //iniciamos server
    server.listen(PORT, () => {
        console.log(`Server on port ${PORT}`);
    });
}
// main()
//     .then(() => console.log('Startup Server'))
//     .catch((err) => console.error(`ERROR:Initilizing Server = ${err}`))
//Creamos conexion
Promise.all(
    //se espera que conecte
    [connectDB()]
).then(()=>{
    //Iniciamos el server
    main();
}).catch((err)=>{
    console.error(`ERROR:Initilizing Server = ${err}`);
});