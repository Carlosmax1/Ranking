import {
  ContainerAvatar1,
  ContainerAvatar2,
  ContainerAvatar3,
  ContainerNameTOP1,
  ContainerNameTOP2,
  ContainerNameTOP3,
  NameTOP1,
  NameTOP2,
  NameTOP3,
  PointsTOP1,
  PointsTOP2,
  PointsTOP3,
  Container,
  Bar
} from "../../styles/podiumStyle";
import Avatar from "./Avatar";

type PodiumProps = {
  users: [{
    id: string;
    name: string;
    url: string;
    points: number;
  }]
}

export default function Podium({ users }: PodiumProps) {

  return (
    <>
      <Container>
        <ContainerAvatar2>
          <Avatar variant="top2" />
          <ContainerNameTOP2>
            <NameTOP2>{users[1].name}</NameTOP2>
            <PointsTOP2>{users[1].points}</PointsTOP2>
          </ContainerNameTOP2>
        </ContainerAvatar2>

        <ContainerAvatar1>
          <Avatar variant="top1" />
          <ContainerNameTOP1>
            <NameTOP1>{users[0].name}</NameTOP1>
            <PointsTOP1>{users[0].points}</PointsTOP1>
          </ContainerNameTOP1>
        </ContainerAvatar1>

        <ContainerAvatar3>
          <Avatar variant="top3" />
          <ContainerNameTOP3>
            <NameTOP3>
              {users[2].name}
            </NameTOP3>
            <PointsTOP3>
              {users[2].points}
            </PointsTOP3>
          </ContainerNameTOP3>
        </ContainerAvatar3>

        <Bar />
      </Container>
    </>
  );
}