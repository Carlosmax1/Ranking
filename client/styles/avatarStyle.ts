import styled from "styled-components";

export const Number1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  background-color: ${(props) => props.theme.colors.top1};
  position: absolute;
  top: 80%;
  right: 35.3%;
  border-radius: 10px;
  font-family: ${(props) => props.theme.font.family.default};
  color: ${(props) => props.theme.colors.white};
  font-weight: 700;
`

export const Number2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  background-color: ${(props) => props.theme.colors.top2};
  position: absolute;
  top: 80%;
  right: 35.3%;
  border-radius: 10px;
  font-family: ${(props) => props.theme.font.family.default};
  color: ${(props) => props.theme.colors.white};
  font-weight: 700;
`

export const Number3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  background-color: ${(props) => props.theme.colors.top3};
  position: absolute;
  top: 80%;
  right: 35.3%;
  border-radius: 10px;
  font-family: ${(props) => props.theme.font.family.default};
  color: ${(props) => props.theme.colors.white};
  font-weight: 700;
`

export const Avatar1 = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 100%; 
  background-color: #fff;
  border: 5px solid ${(props) => props.theme.colors.top1};
  z-index: 1;
  top: -50px;
`
export const Avatar2 = styled.div`
  z-index: 1;
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 100%; 
  background-color: #fff;
  border: 5px solid ${(props) => props.theme.colors.top2};
  margin-top: 3em;
  
`
export const Avatar3 = styled.div`
  z-index: 1;
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 100%; 
  background-color: #fff;
  border: 5px solid ${(props) => props.theme.colors.top3};
  margin-top: 3em;
`