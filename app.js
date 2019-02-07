const http = require('http');

const server = http.createServer((request, response) => {
    response.setHeader("Content-Type", "text/html");
    response.write("<html>");
    response.write("<p>Hello World!</p>")
    response.write("</html>");
    response.end();
});

server.listen(3000);
