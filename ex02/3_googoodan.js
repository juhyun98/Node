const http = require("http");

const url = require("url");

http.createServer( (req, res) => {
    let data = url.parse(req.url, true).query;
    
    let num = data.start;

    res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});

    res.write("<html>");
    res.write("<body>");
    res.write("<table style='border: 1px solid black;'>");
    
    for (i = 1; i <= 9; i++) {
        res.write("<tr>");
        res.write("<td style='border: 1px solid black;'>" + num + "*" + i + "=" + num*i +"</td>")
        res.write("</tr>");
    }
    res.write("</table>");
    res.write("</body>");
    res.write("</html>");


}).listen(3000);