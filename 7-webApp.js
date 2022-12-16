const http = require("http");

const server = http.createServer((req, res) => {
  if(req.url === "/") {
    console.log("home page requested");
    res.end("wecome to home page");
  }
 else if(req.url === "/about") {
  console.log("About page requested");
    res.end("about us page");
  }
  else{
    console.log("Error page");
    res.end(`<h1>Error!</h1>`);
  }
  
});

server.listen(5000, ()=>{
  console.log("server is listening at por 5000 ... ");
});
