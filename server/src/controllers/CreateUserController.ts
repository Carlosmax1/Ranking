import express from 'express';
import { User } from '../models/Users';
import { v4 as uuid } from 'uuid';

export async function CreateUser(request: express.Request, response: express.Response) {
  const body = request.body;
  const user = await User.create({ ...body, id: uuid(), createDate: Date.now() });
  if (!user) {
    return response.json({ result: "Error" });
  } else {
    response.status(200);
    return response.json(user);
  }
}