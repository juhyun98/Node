// 모듈 -> 필요한 기능별로 모아둔 퍼즐 -> 라이브러리

// 모듈 3가지
// 1) 내장모듈 -> 기본적으로 설치가 되어있는 모듈 (많이 사용되는 모듈)

// 2) 자체제작모듈 -> 내가 직접 제작한 모듈

// 3) 외장모듈 -> 다른사람이 만든 모듈 (반드시 설치가 필요)

// 공통점 -> 모듈을 사용하기 위해서는 반드시 import를 해줘야 한다
//       -> require()

// 내가 만든 0_plusModule.js 가져와서 사용하기
// const {result} = require("./0_plusModule.js");
const {perfectNum} = require("./0_perfectNumModule.js");

console.log(perfectNum);

// 1부터 100까지 숫자중 3과 5의 배수 출력 모듈 사용하기
const {mul} = require("./0_mul.js");

console.log(mul);
