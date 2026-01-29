const http = require("http");

// 파일을 읽어오는 모듈 불러오기
const fs = require("fs").promises;


http.createServer( async (req, res) => {
    // fs통해서 내가 만든 html 파일 읽어오기
    let html = await fs.readFile("./2_return.html");
    res.write(html);
    res.end();

}).listen(3000);