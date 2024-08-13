const http = require("http");   //http 내장모듈 npm으로 다운필요 없음
const app = http.createServer((req, res) => {
    //한글
    res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});

    if(req.url === '/'){
        res.end("루트");
    }else if(req.url === "/login"){
        res.end("로그인");
    }
});

app.listen(3001, () =>{
    console.log("http로 가동된 서버입니다.");
});
