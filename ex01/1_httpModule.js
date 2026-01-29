/* 
    내 컴퓨터에 나만의 서버를 제작 (local)
    http 모듈 (내장모듈) 활용 -> 로컬로 간단한 서버를 제작할때 사용
    - 현재는 거의 사용 X
    - 현재는 Express를 사용
*/

// http 모듈 불러오기
const http = require("http");

// ip를 가져올 모듈 불러오기
const req_ip = require("request-ip");

// Server 생성하기
http.createServer( (req, res) => {
    // 내 서버 접속 시 실행되는 부분
    // req -> request 객체 (클라이언트의 요청 정보를 가지고 있는 객체)
    // res -> response 객체 (서버의 응답 정보를 가지고 있는 객체)
    let ip = req_ip.getClientIp(req);

    console.log(ip + "사용자 접속!");

    // 한글 인코딩 추가
    res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});

    // response를 통해서 응답하기

    res.write("<html>");
    res.write("<body>");
    res.write(ip + "님 환영합니다!");
    res.write("<h1>오신 여러분을 환영합니다!</h1>");
    res.write("</body>");
    res.write("</html>");

    // 응답을 하고 나서는 반드시 end로 마무리
    res.end();

}).listen(3000);