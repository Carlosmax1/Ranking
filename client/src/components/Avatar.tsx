import {
  Avatar1,
  Avatar2,
  Avatar3,
  Number1,
  Number2,
  Number3
}
from "../../styles/avatarStyle";

type AvatarProps = {
  variant: 'top1' | 'top2' | 'top3';
}

export default function Avatar({ variant }: AvatarProps) {

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
    </>
  );
}