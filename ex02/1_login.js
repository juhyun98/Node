const http = require("http");

// url 데이터를 객체형태로 변환하는 모듈
const url = require("url");

http.createServer( (req, res) => {
    console.log(req.url);

    // url을 통해서 get방식의 데이터를 객체형태로 변환
    let data = url.parse(req.url, true).query;
    console.log(data);

    res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});
    
    res.write("<html>");
    res.write("<body>");
    res.write("<h1>당신이 입력한 아이디 :" + data.id + "</h1>")
    res.write("<h1>당신이 입력한 비밀번호 :" + data.pw + "</h1>")
    res.write("</body>");
    res.write("</html>");
    
    res.end();

}).listen(3000);