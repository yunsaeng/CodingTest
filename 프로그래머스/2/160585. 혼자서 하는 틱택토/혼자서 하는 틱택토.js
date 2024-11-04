function solution(board) {
  const flatBoard = board.map((row) => row.split("")).flat();
  let [O, X] = [0, 0];

  flatBoard.forEach((mark) => {
    if (mark === "O") O++;
    if (mark === "X") X++;
  });

  const isBingo = (board, mark) => {
    const bingo = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [i, j, k] of bingo) {
      if (board[i] === mark && board[j] === mark && board[k] === mark)
        return true;
    }
    return false;
  };

  if (X > O || O - X > 1) return 0;

  const OBingo = isBingo(flatBoard, "O");
  const XBingo = isBingo(flatBoard, "X");

  if (OBingo && XBingo) return 0;
  if (OBingo && O - X !== 1) return 0;
  if (XBingo && O !== X) return 0;

  return 1;
}
