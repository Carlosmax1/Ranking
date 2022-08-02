import { Container } from "../../styles/rankingStyle";
import Avatar from "./Avatar";
import { rankingConvert } from '../features/ranking';

export default function Ranking({ users }: any) {

  return (
    <>
      <Container>
        <Avatar variant="user" users={rankingConvert(users)} />
      </Container>
    </>
  );
}