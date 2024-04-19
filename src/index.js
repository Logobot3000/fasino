// Import utilities
const colors = require('./utils/colors.js');

// Import the HTTP and FS modules from Node.JS for server creation
const http = require('http');
const fs = require('fs');

// Add server constants
const PORT = process.env.PORT;
const HOST = process.env.HOST;

// Create a serve function to serve a given file to a given path
const serve = (res, path, contentType) => {
    fs.readFile(path, (err, file) => {
        if (err) console.log(`${colors.FgRed}[ERROR]: ${colors.Reset}${err}`);
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(file);
    });
}

// Create a server object
const SERVER = http.createServer((req, res) => {
    
    // Server logic
    switch (req.url) {
        case '/':
            serve(res, './src/html/home.html', 'text/html');
            break;
        
        case '/static/css':
            serve(res, './src/css/globals.css', 'text/css');
            break;
    }

});

// Start the server
SERVER.listen(PORT, HOST, () => {
    console.log(`${colors.FgYellow}[SERVER]: Server is up on http://${HOST}:${PORT}.${colors.Reset}`);
});