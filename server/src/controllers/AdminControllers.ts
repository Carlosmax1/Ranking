import express from 'express';
import { Admin } from '../models/Admin';
import { v4 as uuid } from 'uuid';

export async function AuthController(request: express.Request, response: express.Response) {
  const body = request.body;
  const admin = await Admin.findOne(body);
  if(admin){
    return response.json({token: uuid()})
  }else{
    return response.json({result: "ERROR"});
  }
}