const express = require("express");
const router = express.Router();
const path = require("path");

// 1. 사용자가 메인에 방문했을 때 로그인페이지 보여주기
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../", "public/login.html"));
});

// 2. 로그인경로에 대한 요청을 처리
// 실습 : id가 test고 pw가 1234 라면 로그인성공 페이지로 이동, 그렇지 않다면 로그인 실패페이지로 이동 (GET방식)
router.get("/login", (req, res) => {
    console.log(req.url);
    // Express에서는 get방식으로 보낸 데이터를 자동으로 객체화 진행 -> 키값만 꺼내오면 된다.
    // Express에서는 get방식의 데이터를 .query에 저장을 한다.
    console.log(req.query);
    
    if (req.query.id == "test" && req.query.pw == "1234") {

        // res.sendFile(__dirname + "/public/loginsuccess.html");
        // 경로자체를 변경
        res.redirect("/loginsuccess.html")
    } else {

        // res.sendFile(__dirname + "/public/loginfail.html");
        res.redirect("loginfail.html")
    }
})

// Post데이터 처리
router.post("/login2", (req, res) => {
    console.log(req.body);
    // 실습 : 아이디가 test고 pw가 1234면 로그인성공으로 아니면 실패로
    if (req.body.id == "test" && req.body.pw == "1234") {
        res.redirect("/loginsuccess.html");
    } else {
        res.redirect("/loginfail.html");
    }
})

module.exports = router;