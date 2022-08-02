export function rankingConvert(users){
  let newUsers = [];
  for(let i = 3; i < users.length; i++){
    newUsers.push(users[i]);
  }
  return newUsers;
}