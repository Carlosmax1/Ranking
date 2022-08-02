import {
  ContainerUsers,
  Avatar,
  UserName,
  ContainerIcons,
  ContainerAvatarName
} from '../../styles/userDashboardStyle';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

type UserDashboardProps = {
  users: [{
    id: string;
    name: string;
    url: string;
    points: number;
  }]
}

export default function User({ users }: UserDashboardProps) {
  return (
    <>
      {users.map((user) => (
        <>
          <ContainerUsers>
            <ContainerAvatarName>
              <Avatar />
              <UserName>{user.name}</UserName>
            </ContainerAvatarName>
            <ContainerIcons>
              <IconButton sx={{ marginRight: '1em' }}>
                <EditIcon sx={{ color: '#d9d9d9' }} />
              </IconButton>
              <IconButton>
                <DeleteIcon sx={{ color: '#d9d9d9' }} />
              </IconButton>
            </ContainerIcons>
          </ContainerUsers>
        </>
      ))}
    </>
  );
}