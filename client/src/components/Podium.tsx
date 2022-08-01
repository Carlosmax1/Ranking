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

export default function Podium() {
  return (
    <>
      <Container>
        <ContainerAvatar2>
          <Avatar variant="top2" />
          <ContainerNameTOP2>
            <NameTOP2>Carlos</NameTOP2>
            <PointsTOP2>2</PointsTOP2>
          </ContainerNameTOP2>
        </ContainerAvatar2>

        <ContainerAvatar1>
          <Avatar variant="top1" />
          <ContainerNameTOP1>
            <NameTOP1>Carlos</NameTOP1>
            <PointsTOP1>2</PointsTOP1>
          </ContainerNameTOP1>
        </ContainerAvatar1>
        
        <ContainerAvatar3>
          <Avatar variant="top3" />
          <ContainerNameTOP3>
            <NameTOP3>
              Carlos
            </NameTOP3>
            <PointsTOP3>
              3
            </PointsTOP3>
          </ContainerNameTOP3>
        </ContainerAvatar3>

        <Bar />
      </Container>
    </>
  );
}