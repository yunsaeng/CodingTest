function solution(n, wires) {
  let min = Number.MAX_SAFE_INTEGER;

  const tree = Array.from({ length: n + 1 }, () => []);
  wires.forEach((wire) => {
    const [to, from] = wire;
    tree[from].push(to);
    tree[to].push(from);
  });

  const bfs = (root, except) => {
    const queue = [root];
    const visited = Array.from({ length: n + 1 }, () => false);
    visited[root] = true;
    let count = 0;

    while (queue.length) {
      const node = queue.shift();
      count++;
      tree[node].forEach((n) => {
        if (n !== except && !visited[n]) {
          visited[n] = true;
          queue.push(n);
        }
      });
    }

    return count;
  };

  wires.forEach((wire) => {
    const [to, from] = wire;
    min = Math.min(min, Math.abs(bfs(to, from) - bfs(from, to)));
  });

  return min;
}
