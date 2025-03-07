function solution(edges) {
  let graph = {}; // 그래프 인접 리스트 (adjacency list)
  let inDegree = {}; // 각 정점의 진입 차수 (in-degree)
  let outDegree = {}; // 각 정점의 진출 차수 (out-degree)

  // 그래프 초기화 및 차수 계산
  for (let [u, v] of edges) {
    if (!graph[u]) graph[u] = [];
    if (!graph[v]) graph[v] = []; // 정점 v도 초기화 (in-degree 계산을 위해 필요)

    graph[u].push(v); // u에서 v로 가는 간선 추가

    // 진출 차수 증가
    outDegree[u] = (outDegree[u] || 0) + 1;
    // 진입 차수 증가
    inDegree[v] = (inDegree[v] || 0) + 1;
  }

  // 1️⃣ 생성된 정점 찾기 (진출 차수가 2 이상이고, 진입 차수가 0인 정점)
  let startNode = -1; // 생성된 정점 번호 (기본값 -1)
  for (let node in graph) {
    if ((outDegree[node] || 0) >= 2 && (inDegree[node] || 0) === 0) {
      startNode = Number(node); // 생성된 정점 찾으면 저장
      break;
    }
  }

  // 2️⃣ 그래프 탐색 및 유형 분류 (DFS 이용)
  let visited = new Set(); // 방문한 정점을 저장하는 Set
  let donutCount = 0,
    stickCount = 0,
    eightCount = 0; // 그래프 개수 카운트

  function explore(node) {
    let stack = [node]; // DFS를 위한 스택
    let nodes = new Set(); // 현재 탐색하는 그래프의 정점 저장
    let edgesCount = 0; // 간선 개수 카운트

    while (stack.length > 0) {
      let cur = stack.pop(); // 스택에서 정점 꺼내기
      if (visited.has(cur)) continue; // 이미 방문한 정점이면 건너뛰기
      visited.add(cur); // 방문 처리
      nodes.add(cur); // 현재 그래프에 포함된 정점 추가

      // 현재 정점(cur)에서 이동할 수 있는 모든 정점 탐색
      for (let next of graph[cur] || []) {
        edgesCount++; // 간선 개수 증가
        if (!visited.has(next)) stack.push(next); // 방문하지 않은 정점이면 스택에 추가
      }
    }

    let nodeCount = nodes.size; // 현재 탐색한 그래프의 정점 개수

    // 3️⃣ 그래프 유형 판별
    if (edgesCount === nodeCount)
      donutCount++; // 도넛 그래프 (정점 수 == 간선 수)
    else if (edgesCount > nodeCount)
      eightCount++; // 8자 그래프 (간선 수 > 정점 수)
    else stickCount++; // 막대 그래프 (간선 수 < 정점 수)
  }

  // 4️⃣ 생성된 정점에서 출발하는 모든 그래프 탐색
  for (let node of graph[startNode]) {
    if (!visited.has(node)) explore(node); // 아직 방문하지 않은 정점이면 탐색
  }

  // 최종 결과 반환: [생성된 정점, 도넛 개수, 막대 개수, 8자 개수]
  return [startNode, donutCount, stickCount, eightCount];
}