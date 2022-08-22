import {Router,Request,Response} from 'express';

//Create route
const router:Router = Router();

router.route('/')
    .get( (req:Request,res:Response) => {
        
        res.send('<h1>Home</h1>');
    });

export default router;