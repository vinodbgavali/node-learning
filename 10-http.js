const http = require("http");
const {readFile,readFileSync} = require("fs");

// const errorPage = readFile("404-Error.html", "utf8", (err, result) => {
//     if(err){
//         return err;
//     }
//     else{
//         // console.log(result);
//         return result;
//     }
// });

const errorPageSync = readFileSync("404-Error.html","utf8");
// console.log(errorPageSync);

const server = http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url === "/"){
        res.writeHead(200,{"content-type":"text/html"});
        res.end("<h3>hello there</h3>");
    }
    else if(req.url === "/about"){
        res.writeHead(200,{"content-type":"text/html"});
        res.end("<h3>about page here</h3>");
    }
    else{
        res.writeHead(404,{"content-type":"text/html"});
        res.end(errorPageSync)
    }
    
})

server.listen(5000);