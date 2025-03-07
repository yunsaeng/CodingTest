function solution(genres, plays) {
    const maxMusic = {};
    const music = {};
    const answer = [];
    const len = genres.length;
    
    for(let i = 0; i < len; i++) {
        if(!maxMusic.hasOwnProperty(genres[i])) maxMusic[genres[i]] = 0;
        if(!music.hasOwnProperty(genres[i])) music[genres[i]] = []
        maxMusic[genres[i]] += plays[i];
        music[genres[i]].push([plays[i], i]);
    }
    
    for(const key in music) music[key] = music[key].sort((a, b) => b[0] - a[0] || a[1] - b[1]);
    Object.keys(maxMusic).sort((a, b) => maxMusic[b] - maxMusic[a]).forEach((key) => {
        const temp = music[key].filter((_,i) => i <= 1).map((e) => e[1]);
        answer.push(...temp);
    })
    return answer;
}