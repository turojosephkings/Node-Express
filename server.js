const express = require('express');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<htm><body><h1></h1>This is an Express Server</h1></body></html>')
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})