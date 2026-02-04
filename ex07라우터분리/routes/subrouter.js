// 사용자가 방문한 메인스포츠에 관련된 업무를 처리하는 라우터
const express = require("express");
const subrouter = express.Router();
const path = require("path");
const file_path = path.join(__dirname,"../", "/public");

subrouter.get("/", (req, res) => {
    res.sendFile(file_path + "/esportsmain.html");
})

subrouter.get("/lol", (req, res) => {
    res.sendFile(file_path + "/lol.html");
})



module.exports = subrouter;