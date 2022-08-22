import { Application, Router } from "express";
import routerChat from './note.routes';
import routerHome from './home.routes';

const _routes:[Router][] = [
    [routerHome],
    [routerChat],
];
//Exportamos cada ruta guardada _routes
export const router = (app:Application):void => {
    _routes.forEach((route:[Router]) => {
        //Deconstruimos
        const [url] = route;
        //Usamos la url-ruta
        app.use(url);
    });
};