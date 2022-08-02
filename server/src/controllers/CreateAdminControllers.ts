import express from 'express';
import { Admin } from '../models/Admin';

export async function CreateAdminController(request: express.Request, response: express.Response) {
  const body = request.body;
  const admin = await Admin.create(body);
  if (admin) {
    return response.json(admin);
  } else {
    return response.json({ result: "error" });
  }
}