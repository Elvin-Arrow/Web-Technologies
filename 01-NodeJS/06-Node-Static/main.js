const static = require("node-static"),
  port = 3000,
  http = require("http");

let file = new static.Server("./public", { cache: 3600, gzip: true });

http
  .createServer((request, response) => {
    request
      .addListener("end", () => {
        file.serve(request, response);
      })
      .resume();
  })
  .listen(port);
