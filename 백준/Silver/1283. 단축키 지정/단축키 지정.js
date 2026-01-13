const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  const N = +input[0];
  const options = input.slice(1).map((option) => option.split(" "));

  const shortCuts = new Set();
  const isShortCut = (alpha) =>
    shortCuts.has(alpha.toLowerCase()) || shortCuts.has(alpha.toUpperCase());
  for (let i = 0; i < N; i++) {
    const option = options[i];
    let register = false;
    for (let j = 0; j < option.length; j++) {
      const alpha = option[j][0];
      if (isShortCut(alpha)) continue;

      shortCuts.add(alpha);
      options[i][j] = options[i][j].replace(alpha, `[${alpha}]`);
      register = true;
      break;
    }

    if (!register) {
      for (let j = 0; j < option.length; j++) {
        const word = option[j];
        for (let k = 0; k < word.length; k++) {
          const alpha = word[k];

          if (isShortCut(alpha)) continue;

          shortCuts.add(alpha);
          options[i][j] = options[i][j].replace(alpha, `[${alpha}]`);
          register = true;
          break;
        }

        if(register) break;
      }
    }
  }

  return options.map((option) => option.join(" ")).join("\n");
}

console.log(solve());