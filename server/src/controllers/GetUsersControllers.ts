import express from 'express';

import { User } from '../models/Users';

interface UsersProps {
  id: string;
  name: string;
  url: string;
  points: number;
};

function Order(users: any) {
  users.sort((a: UsersProps, b: UsersProps) => {
    if (a.points > b.points) {
      return -1;
    } else {
      return true;
    }
  })
  return users;
}

export async function GetUser(request: express.Request, response: express.Response) {
  const users = await User.find();
  if (users) {
    response.json(Order(users));
  } else {
    response.json({ result: "ERROR" });
  }
}