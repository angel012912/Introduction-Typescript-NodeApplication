/*
Author: Jose Angel Garcia Gomez
Date: 13-04-2023
Description: This file contains the AbstractController class
*/

import {Router} from 'express';

export default abstract class AbstractController{
    /* Attributes */
    private _router: Router = Router();
    private _prefix: string;

    /* Methods */

    // Get Methods
    public get router(): Router{
        return this._router;
    }

    public get prefix(): string{
        return this._prefix;
    }
    
    // Constructor
    protected constructor(prefix: string){
        this._prefix = prefix;
    }

    // Initialize the routes
    protected abstract initializeRoutes(): void;

}
