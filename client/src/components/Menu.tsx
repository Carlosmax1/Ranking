import { Header, MenuItem, Nav, Ul } from "../../styles/menuStyle"

export default function Menu(){
  return(
    <>
      <Header>
        <Nav>
          <Ul>
            <MenuItem>
              Primeira trilha
            </MenuItem>
            <MenuItem>
              Segunda trilha
            </MenuItem>
          </Ul>
        </Nav>
      </Header>
    </>
  );
}