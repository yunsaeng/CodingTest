function solution(board, moves) {
  let answer = 0;
  const newBoard = Array.from({ length: board.length }, () => []);
  const stack = [];

  for (let i = board.length - 1; i >= 0; i--)
    for (let j = 0; j < board.length; j++)
      if (board[i][j] !== 0) newBoard[j].push(board[i][j]);

  for (const move of moves) {
    const col = move - 1;
    if (newBoard[col].length === 0) continue;
    const doll = newBoard[col].pop();
    if (stack.length > 0 && doll === stack.at(-1)) {
      stack.pop();
      answer += 2;
    } else {
      stack.push(doll);
    }
  }

  return answer;
}
