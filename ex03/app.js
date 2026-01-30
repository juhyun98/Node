/* 
    Express의 핵심파일 app.js 메인 서버 파일
*/

// 1.express버전으로 서버를 생성
const express = require("express");

// 2. 서버 생성
// express기능을 app변수에 담기
const app = express();

// 3. 요청 url 등록
app.get("/main", (req, res) => {
    console.log("메인 요청!");
    res.send("<h1>메인 페이지 입니다</h1>")
    res.end();
});

app.get("/sub", (req, res) => {
    console.log("서브 요청!");
    res.send("<h1>서브 페이지 입니다</h1>") 
    res.end();
});

// 4. 포트번호 등록
app.listen(3000);