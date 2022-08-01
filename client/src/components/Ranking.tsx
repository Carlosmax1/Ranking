import { Container } from "../../styles/rankingStyle";
import Avatar from "./Avatar";
import { user } from "../api/users";

export default function Ranking(){
  return(
    <>
      <Container>
          <Avatar variant="user" users={user} />
      </Container>
    </>
  );
}