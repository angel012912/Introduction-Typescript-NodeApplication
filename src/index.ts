/**
 * Author: Jose Angel Garcia Gomez
 * Date: 18-04-2023
 * Description: Configuration file for the server
 */

import Server from './providers/Server';
import express from 'express';
import cors from 'cors';
import UserController from './controllers/UserController';


const server = new Server({
    port: 8080,
    middleWares: [
        express.json(),
        express.urlencoded({extended: true}),
        cors()
    ],
    controllers: [
        UserController.getInstance()
    ],
    env: 'development'
});

server.init();