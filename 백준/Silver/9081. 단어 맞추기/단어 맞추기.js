const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  const it = input.values();
  const T = +it.next().value;

  const result = [];
  for (let tc = 1; tc <= T; tc++) {
    const word = it.next().value;
    const len = word.length;

    let index = -1;
    for (let i = len - 2; i >= 0; i--) {
      if (word[i] < word[i + 1]) {
        index = i;
        break;
      }
    }

    if (index === -1) result.push(word);
    else {
      const char = word[index];
      const wordSeq = word.split("");
      const temp = wordSeq.slice(index).sort();

      let tempIdx = -1;
      for (let i = 0; i < temp.length; i++) {
        if (char < temp[i]) {
          tempIdx = i;
          break;
        }
      }

      const nextWord =
        wordSeq.slice(0, index).join("") +
        temp[tempIdx] +
        temp.filter((_, i) => i !== tempIdx).join("");
      result.push(nextWord);
    }
  }

  return result.join("\n");
}

console.log(solve());