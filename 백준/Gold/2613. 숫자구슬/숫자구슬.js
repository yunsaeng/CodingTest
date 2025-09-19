const fs = require('fs');

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

// 문제 해결 로직
function solve() {
    const it = input.values();
    const [N, M] = it.next().value.split(' ').map(Number);
    const beads = it.next().value.split(' ').map(Number);

    let left = Math.max(...beads);
    let right = beads.reduce((acc, cur) => acc + cur, 0);

    const getCount = mid => {
        let count = 0;
        let sum = 0;

        for (const bead of beads) {
            sum += bead;
            if (sum > mid) {
                count++;
                sum = bead;
            }
        }

        if (sum > 0) count++;
        return count;
    }

    let result = 0;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const count = getCount(mid);

        if (count <= M) {
            result = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    const getGroup = mid => {
        let count = 0;
        let sum = 0;
        const group = [];
        let groupCount = M;

        for (let i = 0; i < N; i++) {
            const bead = beads[i];
            sum += bead;

            if (sum > mid) {
                group.push(count);
                groupCount--;
                sum = bead;
                count = 0;
            }

            count++;

            if (groupCount === N - i) {
                group.push(count);
                for (let j = N - (i + 1); j > 0; j--) {
                    group.push(1);
                }
                return group;
            }
        }

        if (sum > 0) {
            group.push(count);
        }

        return group;
    }

    return [result, getGroup(result).join(' ')].join('\n');
}
// 결과 출력
const result = solve();
console.log(result);