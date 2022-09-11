const { getEmptyBoard } = require("./board");

const USERS = [];

function findUser(user) {
  return USERS.find(u => u.userName == user);
}
exports.findUser = findUser;


function createNewUser(newUserName) {
  let user = {
    userName: newUserName,
    score: 0,
    boardMap: getEmptyBoard()
  };
  USERS.push(user)
  return user
}
exports.createNewUser = createNewUser;


function getTop10Users() {
  return USERS.sort((first, second) => first.score - second.score).slice(0, 10);
}
exports.getTop10Users = getTop10Users;


