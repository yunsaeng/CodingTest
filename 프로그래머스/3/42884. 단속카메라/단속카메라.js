function solution(routes) {
    routes = routes.sort((a, b) => a[1] - b[1]);
    let answer = 0;
    let camera = -30001;
    routes.forEach(([start, end]) => {
        if(camera < start) {
            answer++;
            camera = end;
        }
    })
    return answer;
}