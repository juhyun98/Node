// 문제. 2부터 1000까지의 수 중 완전수를 모듈로 내보내세요
// 완전수란.
// 자기자신을 제외한 약수의 총합이 자기자신과 같은 수를 완전수라고 합니다

// 모듈로 보낼때 리스트(배열) 형태로 보내주세요

let perfectNum = [];

for (i = 2; i <= 1000; i++) {
    let sum = 0;
    
    for (j = 1; j < i; j++) {
        if (i % j == 0) {
            sum += j;
        }
    }
    if (sum == i) {
        perfectNum.push(i);
    }
}

module.exports = {perfectNum};