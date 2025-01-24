class MinHeap {
  constructor() {
    this.heap = [];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);

      if (this.heap[parentIndex] < this.heap[currentIndex]) break;

      [this.heap[parentIndex], this.heap[currentIndex]] = [
        this.heap[currentIndex],
        this.heap[parentIndex],
      ];
      currentIndex = parentIndex;
    }
  }

  pop() {
    if (this.isEmpty()) return null;

    const minValue = this.heap[0];
    const lastValue = this.heap.pop();

    if (!this.isEmpty()) {
      this.heap[0] = lastValue;
      this.heapifyDown();
    }

    return minValue;
  }

  heapifyDown() {
    let currentIndex = 0;
    const length = this.heap.length;

    while (true) {
      let smallIndex = currentIndex;
      let leftChildIndex = currentIndex * 2 + 1;
      let rightChildIndex = currentIndex * 2 + 2;

      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex] < this.heap[smallIndex]
      )
        smallIndex = leftChildIndex;

      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex] < this.heap[smallIndex]
      )
        smallIndex = rightChildIndex;

      if (smallIndex === currentIndex) break;

      [this.heap[currentIndex], this.heap[smallIndex]] = [
        this.heap[smallIndex],
        this.heap[currentIndex],
      ];
      currentIndex = smallIndex;
    }
  }

  top() {
    return this.heap[0];
  }
}

function solution(k, score) {
  const answer = [];
  const heap = new MinHeap();
  for (let i = 0; i < score.length; i++) {
    heap.push(score[i]);
    if (i >= k) heap.pop();
    answer.push(heap.top());
  }
  return answer;
}
