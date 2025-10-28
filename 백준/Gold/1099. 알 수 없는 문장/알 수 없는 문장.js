const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

// 문제 해결 로직
function solve() {
  const it = input.values();
  const sentence = " " + it.next().value;
  const N = +it.next().value;
  const words = [];
  for (let i = 0; i < N; i++) {
    words.push(it.next().value);
  }

  const getCost = (word1, word2, len) => {
    let cost = 0;
    for (let i = 0; i < len; i++) {
      if (word1[i] !== word2[i]) {
        cost++;
      }
    }
    return cost;
  };

  const sentenceLen = sentence.length - 1;
  const dp = Array(sentenceLen + 1).fill(Infinity);

  dp[0] = 0;
  for (let i = 1; i <= sentenceLen; i++) {
    for (const word of words) {
      const wordLen = word.length;
      if (i < wordLen) continue;
      if (dp[i - wordLen] === Infinity) continue;

      const sliceSentence = sentence.slice(i - wordLen + 1, i + 1);
      const sortedSliceSentence = sliceSentence.split("").sort().join("");
      const sortedWord = word.split("").sort().join("");

      if (sortedSliceSentence === sortedWord) {
        dp[i] = Math.min(
          dp[i],
          dp[i - wordLen] + getCost(sliceSentence, word, wordLen)
        );
      }
    }
  }

  return dp[sentenceLen] === Infinity ? -1 : dp[sentenceLen];
}

console.log(solve());
