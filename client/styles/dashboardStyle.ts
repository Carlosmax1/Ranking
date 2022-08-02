import styled from "styled-components";

export const LayoutMenuDashboard = styled.div`
  display: flex;
  align-items: center;
`

export const ContainerMenu = styled.nav`
  margin: 2em;
  width: 23vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
  -webkit-box-shadow: 5px 5px 10px -3px rgba(0,0,0,0.69); 
  box-shadow: 5px 5px 10px -3px rgba(0,0,0,0.69);
`

export const Container = styled.div`
  padding: 1em;
  margin: 2em;
  width: 67vw;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
  -webkit-box-shadow: 5px 5px 10px -3px rgba(0,0,0,0.69); 
  box-shadow: 5px 5px 10px -3px rgba(0,0,0,0.69);
`

export const TitleDashboard = styled.h1`
  font-family: ${(props) => props.theme.font.family.default};
  color: ${(props) => props.theme.colors.white};
  font-size: 30pt;
  font-weight: 700;
`