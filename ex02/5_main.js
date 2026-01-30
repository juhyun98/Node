const http = require("http");
const url = require("url");
const fs = require("fs").promises;

http.createServer( async (req, res) => {
    
    res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});
    
    let data = url.parse(req.url, true).query;
    let ahn = data.ahn;

    let html = "";

    if (ahn == "1") {
        html = await fs.readFile("./5_1.html");
    } else if (ahn == "2") {
        html = await fs.readFile("./5_2.html");
    } else if (ahn == "3") {
        html = await fs.readFile("./5_3.html");
    } else if (ahn == "4") {
        html = await fs.readFile("./5_4.html");
    }

    res.write(html);



    res.end();

}).listen(3000);