const board = [
  ["3", "2", "1", "2", "3"],
  ["T", "3", "2", "3", "T"],
  ["3", "2", "3", "2", "3"],
  ["2", "3", "T", "3", "2"],
  ["1", "2", "3", "2", "1"],
];

const emptyBoard = [
  [null, null, null, null, null],
  [null, null, null, null, null],
  [null, null, null, null, null],
  [null, null, null, null, null],
  [null, null, null, null, null],
];


function getBoard() {
  return JSON.parse(JSON.stringify(board))
}
exports.getBoard = getBoard;

function getEmptyBoard() {
  return JSON.parse(JSON.stringify(emptyBoard))
}
exports.getEmptyBoard = getEmptyBoard;
