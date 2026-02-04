const express = require("express");
const app = express();
const router = require("./routes/router");


app.use(express.static("public"));
// Post데이터를 자동으로 body라는 공간에 저장하는 모듈등록
app.use(express.urlencoded({extended : true}));


app.use("/", router);

app.listen(3000);

/* 
    데이터를 주고받는 로직을 작성할 때 화면의 변화가 필요하다면 sendFile이 아닌 redirect를 활용한다.
    이유 : sendFile은 화면만 바꾸고 경로는 그대로다.
    단점 : 새로고침을 하면 로직이 재실행
    사용처 : sendFile은 주고받는 값이 없는 화면만 보여줄때 사용, redirect는 값을 처리 후 화면을 보여줄때 사용한다.
*/