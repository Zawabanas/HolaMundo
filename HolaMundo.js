const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html'); // Cambia el tipo de contenido a text/html
    res.end('<h1>Hola Mundo</h1>'); // Envía una etiqueta HTML en lugar de texto plano
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log(`El puerto ${port} está en uso, intentando el siguiente...`);
        server.listen(0);
    } else {
        console.error('Ocurrió un error al iniciar el servidor:', err);
    }
});

server.on('listening', () => {
    const address = server.address();
    console.log(`El servidor se está ejecutando en http://localhost:${address.port}/`);
});

server.listen(port);
