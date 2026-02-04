// 사용자가 방문한 메인스포츠에 관련된 업무를 처리하는 라우터
const express = require("express");
const mainrouter = express.Router();
const path = require("path");
const file_path = path.join(__dirname,"../", "/public");


mainrouter.get("/", (req, res) => {
    res.sendFile(file_path + "/main.html");
})

mainrouter.get("/soccer", (req, res) => {
    res.sendFile(file_path + "/soccer.html");
})

mainrouter.get("/baseball", (req, res) => {
    res.sendFile(file_path + "/baseball.html");
})



module.exports = mainrouter;