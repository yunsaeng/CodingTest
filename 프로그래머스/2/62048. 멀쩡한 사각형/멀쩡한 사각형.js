function solution(w, h) {
    let answer = 0;
    for(let x = 1; x <= w; x++)
        answer += Math.ceil(x * (h / w));
    return (w * h - answer) * 2;
}