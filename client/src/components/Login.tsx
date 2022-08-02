import React from "react";
import { Box, Title, Form, Input, Submit } from "../../styles/loginStyle";
import { useState } from "react";

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
}

export default function Login() {

  const [name, setName] = useState('');
  const [pass, setPass] = useState('');

  return (
    <>
      <Box>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit}>
          <Input onChange={(e) => setName(e.target.value)} required type='text' />
          <Input onChange={(e) => setPass(e.target.value)} type='password' />
          <Submit type="submit">Login</Submit>
        </Form>
      </Box>
    </>
  )
}