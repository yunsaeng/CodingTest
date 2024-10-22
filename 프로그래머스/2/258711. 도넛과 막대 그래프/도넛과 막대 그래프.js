const graph_info = (edges) => {
  const info = edges.reduce((map, edge) => {
    if (!map.has(edge[0])) map.set(edge[0], [1, 0]);
    else {
      const [give, receive] = map.get(edge[0]);
      map.set(edge[0], [give + 1, receive]);
    }

    if (!map.has(edge[1])) map.set(edge[1], [0, 1]);
    else {
      const [give, receive] = map.get(edge[1]);
      map.set(edge[1], [give, receive + 1]);
    }

    return map;
  }, new Map());

  return info;
};

const graph_count = (graph_info) => {
  let answer = [0, 0, 0, 0];
  let temp = 0;
  for (const [key, info] of graph_info) {
    const [give, receive] = info;
    if (give >= 2 && receive === 0) {
      answer[0] = key;
      temp = give;
    } else if (give >= 2 && receive >= 2) answer[3]++;
    else if (give === 0) answer[2]++;
  }
  answer[1] = temp - answer[2] - answer[3];

  return answer;
};

function solution(edges) {
  const graph_info_map = graph_info(edges);
  const answer = graph_count(graph_info_map);
  return answer;
}
