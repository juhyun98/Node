// 메뉴 추천 프로그램
// 한식 -> 오늘 저녁은 제육볶음 입니다.
// 중식 -> 오늘 저녁은 마라탕 입니다.
// 일식 -> 오늘 저녁은 스시 입니다.
// 양식 -> 오늘 저녁은 스테이크 입니다.

const http = require("http");

const url = require("url");

http.createServer( (req, res) => {

    let data = url.parse(req.url, true).query;

    let recommand = data.menu;

    let dinner;

    if (recommand == "한식") {
        dinner = "제육볶음";
    } else if (recommand == "중식") {
        dinner = "마라탕";
    } else if (recommand == "일식") {
        dinner = "스시";
    } else if (recommand == "양식") {
        dinner = "스테이크";
    }

    res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});

    res.write("<html>");
    res.write("<body>");
    res.write("<h1>오늘 저녁은 " + dinner + " 입니다." +"</h1>")
    res.write("</body>");
    res.write("</html>");

    res.end();

}).listen(3000);