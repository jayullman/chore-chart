export function findIndexOfUser(users, name) {
  let userIndex = -1;
  userIndex = users.findIndex((user) => {
    return user.userName === name;
  });
  return userIndex;
}

export function findIndexOfChore(chores, title) {
  let choreIndex = -1;

  choreIndex = chores.findIndex((chore) => {
    return chore.title === title
  });
  return choreIndex;
}
