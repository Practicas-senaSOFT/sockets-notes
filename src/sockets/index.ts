// import http from 'http';

// import {sio as io1}  from './io';
// import {sio as ioPrivate} from './ioPrivate';
// // import sio as ioPrivate from '';

// // Se crea los attach de todos los Sockets creados
// export const attachs = (server:http.Server):void => {

//     io1.attach(server, {
//         cors:{
//             origin: "http://localhost:3000",
//             methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD"],
//             credentials: true,
//         }
//     });

//     // ioPrivate.attach(server, {
//     //     cors:{
//     //         origin: "http://localhost:3000",
//     //         methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD"],
//     //         credentials: true,
//     //     }
//     // });

// };