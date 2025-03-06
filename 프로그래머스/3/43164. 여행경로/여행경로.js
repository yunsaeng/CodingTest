function solution(tickets) {
  const answer = [];
  const dfs = (stack, n, visited) => {
    if (n === tickets.length) {
      answer.push([...stack]);
      return;
    }

    tickets.forEach((ticket, idx) => {
      const [start, end] = ticket;
      if (!visited[idx] && stack.at(-1) === start) {
        visited[idx] = true;
        stack.push(end);
        dfs(stack, n + 1, visited);
        stack.pop();
        visited[idx] = false;
      }
    });
  };

  tickets.forEach((ticket, idx) => {
    if (ticket[0] === "ICN") {
      const visited = Array(tickets.length).fill(false);
      visited[idx] = true;
      dfs([...ticket], 1, visited);
    }
  });
    
  return answer.sort().shift();
}