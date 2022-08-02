import styled from 'styled-components';

export const Box = styled.div`
  display: block;
  width: 50vw;
  height: 50vh;
  background-color: ${(props) => props.theme.colors.secondary};
  margin: 0 auto;
  transform: translate(0, 50%);
  border-radius: 20px;
  padding: 1em;
`

export const Title = styled.h1`
  font-family: ${(props) => props.theme.font.family.default};
  color: #d9d9d9;
  text-align: center;
  font-size: 28pt;
`

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Input = styled.input`
  padding: 0.5em;
  margin: 1em;
  width: 300px;
  height: 40px;
  border-radius: 20px;
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.colors.primary};
  color: #d9d9d9;
  font-family: ${(props) => props.theme.font.family.default};
  font-weight: 500;
`

export const Submit = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  padding: 0.5em;
  width: 300px;
  height: 40px;
  border-radius: 20px;
  color: #d9d9d9;
  background-color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.font.family.default};
  font-weight: 600;
  font-size: 13pt;
  margin-top: 1em;
  &:hover {
    background-color: #111221;
  }
`