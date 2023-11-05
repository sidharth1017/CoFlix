// Import the required modules
const http = require('http');

// Define the port number
const port = 5100;

// Create a simple HTTP server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, this is your Node.js server!');
});

// Start the server
server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
