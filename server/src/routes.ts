import express from 'express';

import { CreateUser } from './controllers/CreateUserController';
import { GetUser } from './controllers/GetUsersControllers';
import { Auth } from '../src/middleware/middleware';
import { AuthController } from './controllers/AdminControllers';
import { CreateAdminController } from './controllers/CreateAdminControllers';

export const routes = express.Router();

routes.post('/api/user', Auth, CreateUser);
routes.get('/api/users', GetUser);
routes.post('/api/auth', AuthController);
routes.post('/api/auth/create', Auth, CreateAdminController);