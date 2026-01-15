const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  enqueue(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  dequeue() {
    const root = this.heap[0];
    const last = this.heap.pop();

    if (!this.isEmpty()) {
      this.heap[0] = last;
      this.heapifyDown();
    }

    return root;
  }

  top() {
    return this.heap[0];
  }

  heapifyUp() {
    let index = this.size() - 1;

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.heap[index] > this.heap[parentIndex]) {
        [this.heap[index], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[index],
        ];
        index = parentIndex;
      } else break;
    }
  }

  heapifyDown() {
    let index = 0;
    const length = this.size();

    while (index < length) {
      const leftChildIndex = index * 2 + 1;
      const rightChildIndex = leftChildIndex + 1;
      let temp = index;

      if (
        leftChildIndex < length &&
        this.heap[temp] < this.heap[leftChildIndex]
      )
        temp = leftChildIndex;
      if (
        rightChildIndex < length &&
        this.heap[temp] < this.heap[rightChildIndex]
      )
        temp = rightChildIndex;

      if (temp === index) break;

      [this.heap[index], this.heap[temp]] = [this.heap[temp], this.heap[index]];
      index = temp;
    }
  }
}

function solve() {
  const it = input.values();
  const [N, H, T] = it.next().value.split(" ").map(Number);

  const giantHeights = new PriorityQueue();
  for (let i = 0; i < N; i++) {
    const giantHeight = +it.next().value;
    giantHeights.enqueue(giantHeight);
  }

  let count = 0;
  while (count < T) {
    // 1. 현재 가장 큰 거인이 이미 센티보다 작으면 즉시 종료
    if (giantHeights.top() < H || giantHeights.top() === 1) break;

    // 2. 뿅망치 사용
    const top = giantHeights.dequeue();
    giantHeights.enqueue(Math.floor(top / 2));
    count++;
  }

  // 3. 최종 판정
  if (giantHeights.top() < H) {
    return `YES\n${count}`;
  } else {
    return `NO\n${giantHeights.top()}`;
  }
}

console.log(solve());