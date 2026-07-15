const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.statusCode = 200;
    res.end("<h1>Welcome to my Node.js server</h1>");
    return;
  }

  if (req.url === "/about") {
    res.statusCode = 200;
    res.end("<h1>About Page</h1><p>This server is created using Node.js.</p>");
    return;
  }

  res.statusCode = 404;
  res.end("<h1>404 Page Not Found</h1>");
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
