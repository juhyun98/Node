// 1부터 100까지 숫자중 3과 5의 배수 출력 모듈 사용하기

let mul = [];

for (i = 0; i < 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        mul.push(i);
    }
}

module.exports = {mul};