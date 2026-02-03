/* 
    라우터의 역할 : 클라이언트에서 보낸 경로에 관련된 업무를 담당하는 파일
    * 실질적인 대부분의 업무를 처리
    * 포인트 : 라우터는 express안에 존재하는 하나의 기능
*/

const express = require("express");
const router = express.Router();
// 경로를 수정할 때 사용하는 모듈
const path = require("path");
const file_path = path.join(__dirname, "../", "/public");

// 서버 생성
router.get("/", (req, res) => {
    console.log("1");
    res.sendFile(file_path + "/home.html");
})

// 로그인 페이지로 방문했을 때 처리할 코드
router.get("/login", (req, res) => {
    console.log(__dirname);
    res.sendFile(__dirname + "/login.html");
})


// 라우터 호출을 위한 exports 작업
module.exports = router;