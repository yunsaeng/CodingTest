class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);

    let index = this.heap.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    while (index > 0 && this.heap[parentIndex] > this.heap[index]) {
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];

      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  pop(value) {
    if (this.heap.length <= 1) return this.heap.pop();

    const output = this.heap[0];
    this.heap[0] = this.heap.pop();
    let index = 0;

    while (index * 2 + 1 < this.heap.length) {
      let left = index * 2 + 1;
      let right = index * 2 + 2;
      let next = index;

      if (this.heap[left] < this.heap[next]) next = left;
      if (right < this.heap.length && this.heap[right] < this.heap[next])
        next = right;
      if (index === next) break;

      [this.heap[index], this.heap[next]] = [this.heap[next], this.heap[index]];
      index = next;
    }

    return output;
  }
}

function solution(n, k, enemy) {
  if (enemy.length <= k) return enemy.length;

  const pq = new PriorityQueue();
  enemy.slice(0, k).forEach((e) => pq.push(e));

  for (let i = k; i < enemy.length; i++) {
    pq.push(enemy[i]);
    const min = pq.pop();
    if (n - min < 0) return i;
    n -= min;
  }

  return enemy.length;
}
