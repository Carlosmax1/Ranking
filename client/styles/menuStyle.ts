import styled from "styled-components";

export const Header = styled.header`
  width: 352px;
  height: 60px;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
  margin: 0 1em;
`

export const Nav = styled.nav`
  padding: 1em;
`

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const MenuItem = styled.li`
  cursor: pointer;
  list-style: none;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.font.family.default};
  font-weight: 600;
  border-bottom: 2px solid ${(props) => props.theme.colors.bodermenubottom};

`