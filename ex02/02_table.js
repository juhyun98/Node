const http = require("http");

const url = require("url");

http.createServer( (req, res) => {
    let data = url.parse(req.url, true).query;

    res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});

    res.write("<html>");
    res.write("<body>");
    res.write("<table style='border: 1px solid black;'>");
    res.write("<tr>");
    
    for (i = 1; i <= data.number; i++) {
        res.write("<td style='border: 1px solid black;'>" + i +"</td>")
    }
    res.write("</tr>");
    res.write("</table>");
    res.write("</body>");
    res.write("</html>");

    res.end();
    
}).listen(3000);