const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  const it = input.values();
  const IPv6 = it.next().value.split(":");

  if (IPv6[0] === "") IPv6.shift();
  if (IPv6.at(-1) === "") IPv6.pop();

  const zeroLength = 8 - IPv6.filter((e) => e !== "").length;

  let result = [];
  for (const ip of IPv6) {
    if(ip === "") {
      for(let i = 0; i < zeroLength; i++) result.push("0000");
    } else {
      const temp = "0000" + ip;
      result.push(temp.slice(-4));
    }
  }

  return result.join(":");
}

console.log(solve());