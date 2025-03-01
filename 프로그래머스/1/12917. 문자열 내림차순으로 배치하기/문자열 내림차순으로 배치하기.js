function solution(s) {
let lowercase = s.replace(/[A-Z]/g, "").split("").sort().reverse().join("");
let uppercase = s.replace(/[a-z]/g, "").split("").sort().reverse().join("");
return lowercase + uppercase;

}