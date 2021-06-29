const http = require("http");
const fs = require("fs");
const url = require("url");

http
  .createServer((request, response) => {
    let pathName = url.parse(request.url).pathname;

    console.log("Request for " + pathName + " recieved");

    fs.readFile(pathName.substr(1), "utf-8", (err, data) => {
      if (err) {
        console.error(err);

        response.writeHead(404, { "Content-Type": "text/html" });
      } else {
        response.writeHead(200, { "Content-Type": "text/html" });

        response.write(data);

        response.end();
      }
    });
  })
  .listen(8081);

console.log("Server running at http://127.0.0.1:8081");
