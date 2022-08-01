import express from 'express';

import { CreateUser } from './controllers/CreateUserController';
import { Auth } from '../src/middleware/middleware';

export const routes = express.Router();

routes.post('/api/user', Auth, CreateUser);
