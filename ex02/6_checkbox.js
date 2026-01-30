const http = require("http");
const url = require("url");

http.createServer( (req, res) => {
    res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});

    let data = url.parse(req.url, true).query;

    let idol = data.group;
    
    res.write("<html>");
    res.write("<body>");
    res.write("<h1>");
    if (idol){
        for (let i = 0; i < idol.length; i++) {
                res.write(data.group[i] + "\n");
            }
        }
    res.write("</h1>");
    res.write("<h1>당신이 선택한 가수는 " + idol + " 입니다." + "</h1>")
    res.write("</body>");
    res.write("</html>");

    res.end();

}).listen(3000);