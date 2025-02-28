 function solution(n) {
     const prime = Array(n + 1).fill(true);
     prime[0] = prime[1] = false;
     
     for(let i = 2; i <= n; i++) {
         if(prime[i]) {
             for(let j = i * 2; j <= n; j+=i) {
                 prime[j] = false;
             }
         }
     }
     
     return prime.filter(Boolean).length;
}