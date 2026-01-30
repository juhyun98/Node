// http 모듈 불러오기
const http = require("http");

// post 방식에서 string -> object 모듈
const qs = require("querystring");

// Server 생성하기
http.createServer((req, res)=>{
    // 1.post로 받아온 buffer데이터를 String으로 변환영역
    let body = "";

    req.on("data", (data) => {
        console.log(data);
        // 누적해서 담아줘야 한다. buffer데이터는 하나씩 넘어오기 때문
        body += data;
        console.log(body);
    })
    // 2.String으로 변환한 데이터를 객체로 활용하는 영역
    
    req.on("end", () =>{
        let data = qs.parse(body);
        console.log(data);

        res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});
        res.write("<h3>회원가입 결과</h3>");
        res.write("입력한 ID : " + data.id + "<br>");

        res.write("입력한 PW : " + data.pw + "<br>");
        res.write("입력한 이름 : " + data.name + "<br>");
        res.write("입력한 성별 : " + data.gender + "<br>");
        res.write("입력한 이메일 : " + data.email + "<br>");
        res.write("입력한 취미 : ")
        for(let i = 0; i < data.hobby.length; i++){
            res.write(data.hobby[i]);
        }
        res.write("<br>");
        res.write("입력한 자기소개 : " + data.self)
        res.end();
    })

}).listen(3000);