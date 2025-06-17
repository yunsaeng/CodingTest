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

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  top() {
    return this.heap[0];
  }

  push(value) {
    this.heap.push(value);
    this._bubbleUp();
  }

  pop() {
    if (this.heap.length <= 1) return this.heap.pop();
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._sinkDown();
    return max;
  }

  _bubbleUp() {
    let idx = this.heap.length - 1;
    while (idx > 0) {
      const parent = Math.floor((idx - 1) / 2);
      if (this.heap[parent] >= this.heap[idx]) break;

      [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
      idx = parent;
    }
  }

  _sinkDown() {
    let parent = 0;
    const length = this.heap.length;
    while (true) {
      const left = parent * 2 + 1;
      const right = parent * 2 + 2;
      let cur = parent;
      if (left < length && this.heap[cur] < this.heap[left]) cur = left;
      if (right < length && this.heap[cur] < this.heap[right]) cur = right;
      if (cur === parent) break;

      [this.heap[parent], this.heap[cur]] = [this.heap[cur], this.heap[parent]];
      parent = cur;
    }
  }
}

function solution(input) {
  const N = +input[0];
  const candidate = input.slice(1).map(Number);
  const heap = new MaxHeap();

  for (let i = 1; i < N; i++) heap.push(candidate[i]);

  let cur = candidate[0];
  let result = 0;

  while (heap.top() !== undefined && cur <= heap.top()) {
    heap.push(heap.pop() - 1);
    cur++;
    result++;
  }

  console.log(result);
}