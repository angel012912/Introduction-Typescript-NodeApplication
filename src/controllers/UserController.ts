/**
 * Author: Jose Angel Garcia Gomez
 * Date: 18-04-2023
 * Description: This file contains the UserController class
 */

import { Request, Response } from "express";
import AbstractController from "./AbstractControllers";

class UserController extends AbstractController{
    
    /* Attributes */
    private static instance: UserController;
    
    /* Methods */

    // Singleton
    public static getInstance(): AbstractController{
        if(!this.instance){
            this.instance = new UserController('user');
        }
        return this.instance;
    }

    /* Routes definition and configuration*/
    protected initializeRoutes(): void {
        this.router.get('/readUsers', this.getReadUsers.bind(this));
        this.router.post('/createUser', this.postCreateUser.bind(this));
    }

    /* Routes Methods */
    private getReadUsers(req: Request, res: Response): void{
        res.status(200).send('Servicio en linea');
    }

    private postCreateUser(req: Request, res: Response): void{
        res.status(200).send('Registro exitoso');
    }
}

export default UserController;