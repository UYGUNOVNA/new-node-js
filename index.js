const fs = require("fs");
const http = require("http");
const url = require("url");

const about = fs.readFileSync("./html/about.html", "utf-8");
const contact = fs.readFileSync("./html/contact.html", "utf-8");
const home = fs.readFileSync("./html/home.html", "utf-8");
const login = fs.readFileSync("./html/login.html", "utf-8");

const data = fs.readFileSync("./dev-data/data.json", "utf-8");
const server = http.createServer(function (request, response) {
  const littleUrl = request.url;
  if (littleUrl === "/about") {
    response.writeHead(200, {
      "content-type": "text/html",
      "mening-sahifam": "zur ishladi",
    });
    response.end(about);
    // response.end("siz salom sahifasiga kirdiz");
  } else if (littleUrl === "/contact") {
    response.writeHead(200, {
      "content-type": "text/html",
      "mening-sahifam": "zur ishladi",
    });
    response.end(contact);
    // response.end("siz salom sahifasiga kirdiz");
  } else if (littleUrl === "/login") {
    response.writeHead(200, {
      "content-type": "text/html",
      "mening-sahifam": "zur ishladi",
    });
    response.end(login);
    // response.end("siz salom sahifasiga kirdiz");
  } else if (littleUrl === "/home") {
    response.writeHead(200, {
      "content-type": "text/html",
      "mening-sahifam": "zur ishladi",
    });
    response.end(home);
    // response.end("siz salom sahifasiga kirdiz");
  } else if (littleUrl === "/api") {
    response.writeHead(200, {
      "content-type": "text/json",
      "mening-sahifam": "zur ishladi",
    });
    response.end(data);
    // response.end("siz salom sahifasiga kirdiz");
  } else {
    response.end("sizda bunday sahifa yuq");
  }
});
server.listen("8000", "127.0.0.1");
// fs.writeFile("output.txt", "salom", "utf-8", function (err) {
//   if (err) {
//     throw new Error("xato");
//     console.log("malumotlar filega yozildi");
//   }
// });
// const fs = require("fs");
// Block code -> Sync coding
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);

// const textOut = `This file overwrite: ${textIn}`;

// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("Write file");

// Non-blocking code -> Async coding
// fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
//   console.log(data);
// });
// console.log("Read file");
