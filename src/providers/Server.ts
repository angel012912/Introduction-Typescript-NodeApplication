/*
Author: Jose Angel Garcia Gomez
Date: 13-04-2023
Description: This file contains the server class
*/

import express, { Request, Response } from "express";
import AbstractController from "../controllers/AbstractControllers";

class Server{
    /* Attributes */
    private app: express.Application;
    private port: number;
    private env: string;

    /* Methods */

    // Constructor
    constructor(appInit:{port:number, env:string, middleWares:any[], controllers:AbstractController[]}){
        this.app = express();
        this.port = appInit.port;
        this.env = appInit.env;
        this.loadMiddleWares(appInit.middleWares);
        this.loadControllers(appInit.controllers);
    }
    
    // Load middlewares automatically
    private loadMiddleWares(middleWares:any[]):void{
        middleWares.forEach((middleWare:any) => {
            this.app.use(middleWare);
        })
    }

    // Load controllers automatically
    private loadControllers(controllers:AbstractController[]):void{
        controllers.forEach((controller:AbstractController) => {
            this.app.use(`/${controller.prefix}`, controller.router);
        })
    }

    // Start the server
    public init():void{
        this.app.listen(this.port, () => {
            console.log(`Server: Running @'http://localhost:${this.port}'`);
        })
    }
}