function solution(n, costs) {
  costs.sort((a, b) => a[2] - b[2]); // 간선 비용 기준으로 정렬
  const parent = Array.from({ length: n }, (_, i) => i);
  const rank = Array(n).fill(0); // 트리의 깊이를 추적하는 랭크 배열

  const findParent = (node) => {
    if (parent[node] !== node) {
      parent[node] = findParent(parent[node]);
    }
    return parent[node];
  };

  const union = (node, anotherNode) => {
    const parentNode = findParent(node);
    const parentAnotherNode = findParent(anotherNode);

    if (parentNode !== parentAnotherNode) {
      // 유니온-바이-랭크
      if (rank[parentNode] > rank[parentAnotherNode]) {
        parent[parentAnotherNode] = parentNode;
      } else if (rank[parentNode] < rank[parentAnotherNode]) {
        parent[parentNode] = parentAnotherNode;
      } else {
        parent[parentAnotherNode] = parentNode;
        rank[parentNode]++; // 랭크가 증가
      }
      return true;
    }
    return false;
  };

  let totalCost = 0;
  let edge = 0;

  for (const [to, from, cost] of costs) {
    if (union(to, from)) {
      totalCost += cost;
      edge++;
    }
    if (edge === n - 1) break; // 모든 노드를 연결했으면 종료
  }

  return totalCost;
}
