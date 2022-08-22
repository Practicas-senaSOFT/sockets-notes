import { Router,Request,Response } from 'express';
import path from 'path';

const router:Router = Router();

router.route('/chatPrivate')
    .get((req:Request,res:Response) => {
        return res.sendFile('/home/data/programacion/node/sockets/firstProject/cli/roomPrivate.html');
    })
    .post(()=>{

    });

export default router;