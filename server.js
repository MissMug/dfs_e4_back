// var http = require("http");
// //Import du module "fs" de NodeJS
// const fs = require("fs");

// function onRequest(request, response) {
//   response.writeHead(200, { "Content-Type": "text/plain" });
//   fs.readFile("./index1.html", null, function (error, data) {
//     if (error) {
//       response.writeHead(404);
//       response.write("File not found!");
//     } else {
//       response.write(data);
//     }
//     response.end();
//   });
// }
// http.createServer(onRequest).listen(5500);
