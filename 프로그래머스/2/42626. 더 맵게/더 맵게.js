function solution(scoville, K) {
  let answer = 0;
  const heap = new MinHeap(scoville);

  while (heap.size() > 1 && heap.peek() < K) {
    const first = heap.pop();
    const second = heap.pop();
    const newScoville = first + second * 2;
    heap.push(newScoville);
    answer++;
  }

  if (heap.peek() < K) return -1;
  return answer;
}

class MinHeap {
  constructor(arr) {
    this.heap = [];
    this.buildHeap(arr);
  }

  buildHeap(arr) {
    this.heap = arr;
    for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
      this.heapify(i);
    }
  }

  heapify(index) {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let smallest = index;

    if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }
    if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }
    if (smallest !== index) {
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      this.heapify(smallest);
    }
  }

  push(val) {
    this.heap.push(val);
    let index = this.heap.length - 1;
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (this.heap[index] >= this.heap[parent]) break;
      [this.heap[index], this.heap[parent]] = [
        this.heap[parent],
        this.heap[index],
      ];
      index = parent;
    }
  }

  pop() {
    if (this.heap.length === 0) return null;
    const root = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length === 0) return root;
    this.heap[0] = last;
    this.heapify(0);
    return root;
  }

  peek() {
    return this.heap[0] ?? null;
  }

  size() {
    return this.heap.length;
  }
}