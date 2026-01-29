// 문제
// 내 서버로 접속했을 때
// 짝궁이 접속하면 웹페이지에 -> 짝꿍아 안녕! 출력
// 선생님이 접속하면 웹페이지에 -> 선생님 안녕하세요! 출력
// 그 외 친구들이 접속하면 -> 애들아 반가워~ 출력

// 힌트 -> ip 192.168.56.1
// 선생님 ip -> 192.168.219.131

const http = require("http");

const req_ip = require("request-ip");

http.createServer( (req, res) => {
    let ip = req_ip.getClientIp(req);

    let user;

    if (ip == "::ffff:192.168.219.131") {
        user = "선생님";
    } else if (ip == "짝꿍ip") {
        user = "짝꿍";
    } else {
        user = "여러분";
    }

    console.log(ip);

    // 한글 인코딩 추가
    res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});

    // response를 통해서 응답하기

    res.write("<html>");
    res.write("<body>");
    res.write(user + " 환영합니다!");
    res.write("</body>");
    res.write("</html>");

    // 응답을 하고 나서는 반드시 end로 마무리
    res.end();

}).listen(3000);