const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin, // 백준 제출 시
  // input: fs.createReadStream("./example.txt"), // 로컬 테스트용
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    this.#up();
  }

  pop() {
    if (this.heap.length <= 1) return this.heap.pop();
    const top = this.top();
    this.heap[0] = this.heap.pop();
    this.#down();
    return top;
  }

  top() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  #up() {
    let cur = this.size() - 1;

    while (cur > 0) {
      const parent = Math.floor((cur - 1) / 2);
      if (this.heap[parent] <= this.heap[cur]) break;
      [this.heap[parent], this.heap[cur]] = [this.heap[cur], this.heap[parent]];
      cur = parent;
    }
  }

  #down() {
    let cur = 0;
    const len = this.size();
    while (cur < len) {
      const left = cur * 2 + 1;
      const right = cur * 2 + 2;
      let change = cur;

      if (left < len && this.heap[left] < this.heap[change]) change = left;
      if (right < len && this.heap[right] < this.heap[change]) change = right;

      if (change === cur) break;
      [this.heap[cur], this.heap[change]] = [this.heap[change], this.heap[cur]];
      cur = change;
    }
  }
}

function solution(input) {
  const N = +input[0];
  const meetings = input.slice(1).map((line) => line.split(" ").map(Number));

  meetings.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  const pq = new MinHeap();
  let answer = 0;

  for (const [start, end] of meetings) {
    while (pq.size() > 0 && pq.top() <= start) {
      pq.pop();
    }
    pq.push(end);
    answer = Math.max(answer, pq.size());
  }

  console.log(answer);
}