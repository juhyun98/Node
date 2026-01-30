const http = require("http");

/* 
    Post 방식
    - 데이터가 url에 동반되지 않는다
    - 데이터 처리 : buffer -> String -> Object
*/

// post방식에서 String 데이터를 Object로 변환하는 모듈
const qs = require("querystring");

http.createServer( (req, res) => {
    res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});

    // post방식의 데이터 읽어오기
    // 문자열 형태로 값을 저장할 변수
    let body = "";

    // 1.post로 받아온 buffer 데이터를 String으로 변환
    req.on("data", (data) => {
        console.log(data);
        body += data;
        console.log(body);
    });

    // 2.String으로 변환한 데이터를 객체로 전환
    req.on("end", () => {
        let data = qs.parse(body);
        console.log(data);
    });
    
    res.end();

}).listen(3000);