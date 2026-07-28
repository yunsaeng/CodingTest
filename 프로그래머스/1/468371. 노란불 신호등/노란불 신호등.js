function lcm(a, b) {
    function gcd(x, y) {
        return y === 0 ? x : gcd(y, x % y);
    }
    return (a * b) / gcd(a, b);
}

function solution(signals) {
    let maxLimit = 1;
    const cycles = signals.map(([g, y, r]) => {
        const cycle = g + y + r;
        maxLimit = lcm(maxLimit, cycle);
        return {g, y, cycle};
    })
    
    for(let t = 1; t <= maxLimit; t++) {
        let allYellow = true;
        
        for(let i = 0; i < cycles.length; i++) {
            const {g, y, cycle} = cycles[i];
            const mod = (t - 1) % cycle;
            
            if(mod < g || mod >= g + y) {
                allYellow = false;
                break;
            }
        }
        
        if(allYellow) return t;
    }
    
    return -1;
}