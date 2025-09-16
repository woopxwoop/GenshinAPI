import http from "http";
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  res.write("<h1>Hello World!</h1>");
  res.end();
});

server.listen(8000, () => {
  console.log(`Server running on port ${PORT}`);
});
