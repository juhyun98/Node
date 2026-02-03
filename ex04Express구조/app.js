/* 
    서버를 제작할 때는 3가지 순서를 지킨다.
    * 큰 틀부터 제작한다.
    1) 서버를 만들기 위한 모듈 호출
    2) 서버생성
    3) 포트연결
    4) 서버안에 코드 작성
*/

// express 전체 모듈 호출
const express = require("express");

// 전체기능을 담당하는 상수를 제작
const app = express();

/* 
    정적인 파일들을 클라이언트가 요청하면 자동으로 public에서 찾게 셋팅
    장점 : 서버가 매번 파일을 찾아줄 필요가 없다.
*/
app.use(express.static("public"))

// 서버 생성
app.get("/", (req, res) => {
    console.log("1");
    res.sendFile(__dirname + "/public/home.html");
})

// 로그인 페이지로 방문했을 때 처리할 코드
app.get("/login", (req, res) => {
    console.log(__dirname);
    res.sendFile(__dirname + "/login.html");
})


// 포트 연결
app.listen(3000);

/* 
    수업 포인트 
    1) Express로 서버를 생성할 때는 반드시 폴더를 만들고, app.js를 제작 후, express 설치하기
    2) app.js가 메인 서버 파일 -> 모든 업무를 컨트롤하는 파일
    3) 서버를 제작할 때는 큰 틀부터 작은 틀 순으로 제작한다.
    4) Express의 첫번째 규칙! 반드시 파일을 불러올 때는 "절대경로"를 사용한다.
        이유 : 모두가 똑같은 환경에서 실행하기 위해서
    5) __dirname : 실행하는 컴퓨터의 절대경로를 알아오는 키워드
    6) 단순한 응답은 send 처리 -> write, end 합친 기능
    7) 파일을 응답할 때는 sendFile 처리

    Express에서 정적인 파일에 대한 요청을 자동처리하는 방법
    원리 : 클라이언트에서 정적파일(css, html, js, img ...)을 요청하면 자동으로 public폴더에서 찾게 셋팅
    사용법 : 응답하는 코드 위쪽에 app.use(express.static("public")); 코드를 작성한다.
*/