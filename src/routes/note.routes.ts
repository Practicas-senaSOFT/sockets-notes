import {Request, Response, Router } from 'express';
import path from 'path';

//Construimos la ruta
const router:Router = Router();

router.route('/chat')
    .get(async (req:Request, res:Response) => {
        // return res.send('HOLA MUNDO');
        // res.sendFile(path.join(__dirname,'cli'));
        res.sendFile('/home/andressn/programming/backend/node/sockets/sockets-notes/cli/index.html');
    });

//Exportamos la ruta
export default router;