import {
  Avatar1,
  Avatar2,
  Avatar3,
  Number1,
  Number2,
  Number3,
  AvatarUserContainer,
  AvatarUser,
  AvatarUsersContainerInfos,
  Name,
  Points
}
  from "../../styles/avatarStyle";

type AvatarUserProps = {
  id: number;
  name: string
  url: string;
  points: number;
}

type AvatarProps = {
  variant: 'top1' | 'top2' | 'top3' | 'user';
  users?: AvatarUserProps[];
}

export default function Avatar({ variant, users }: AvatarProps) {

  return (
    <>
      {variant === 'top1' && (
        <Avatar1>
          <Number1>1</Number1>
        </Avatar1>
      )}
      {variant === 'top2' && (
        <Avatar2>
          <Number2>2</Number2>
        </Avatar2>
      )}
      {variant === 'top3' && (
        <Avatar3>
          <Number3>3</Number3>
        </Avatar3>
      )}
      {variant === 'user' && (
        <AvatarUserContainer>
          {users?.map((user) => (
            <>
              <AvatarUsersContainerInfos key={user.id} >
                <AvatarUser url={user.url} />
                <Name>{user.name}</Name>
                <Points>{user.points}</Points>
              </AvatarUsersContainerInfos>
            </>
          ))}
        </AvatarUserContainer>
      )}
    </>
  );
}