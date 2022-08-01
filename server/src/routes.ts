import express from 'express';

import { CreateUser } from './controllers/CreateUserController';
import { GetUser } from './controllers/GetUsersControllers';
import { Auth } from '../src/middleware/middleware';

export const routes = express.Router();

routes.post('/api/user', Auth, CreateUser);
routes.get('/api/users', GetUser);