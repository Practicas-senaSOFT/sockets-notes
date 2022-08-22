import express, { Application } from 'express';
import { router } from './routes/index.routes';
import morgan from 'morgan';
//Create app
const app:Application = express();

//---->middlewares<----
app.use(morgan('dev'));
app.use(express.json());

//---->Routes<----
router(app);

//Exportamos app
export default app;