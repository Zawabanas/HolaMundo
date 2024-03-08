const http = require('http'); // Importa el módulo http de Node.js

const port = 3000; // Define el puerto en el que el servidor escuchará las solicitudes HTTP

const server = http.createServer((req, res) => { // Crea un servidor HTTP y define cómo manejar las solicitudes entrantes
    res.statusCode = 200; // Establece el código de estado de la respuesta HTTP a 200 (OK)
    res.setHeader('Content-Type', 'text/plain'); // Establece el encabezado Content-Type de la respuesta a texto plano
    res.end('Hola Mundo\n'); // Envía "Hola Mundo" como cuerpo de la respuesta y finaliza la respuesta
});

server.on('error', (err) => { // Maneja los errores que ocurren al iniciar el servidor
    if (err.code === 'EADDRINUSE') { // Verifica si el error es debido a que el puerto está en uso
        console.log(`El puerto ${port} está en uso, intentando el siguiente...`); // Imprime un mensaje indicando que el puerto está en uso
        server.listen(0); // Intenta escuchar en un puerto aleatorio disponible
    } else { // Si el error no es debido a que el puerto está en uso
        console.error('Ocurrió un error al iniciar el servidor:', err); // Imprime el error en la consola
    }
});

server.on('listening', () => { // Maneja el evento cuando el servidor comienza a escuchar en un puerto
    const address = server.address(); // Obtiene la información del servidor, como el puerto en el que está escuchando
    console.log(`El servidor se está ejecutando en http://localhost:${address.port}/`); // Imprime un mensaje indicando la dirección y el puerto en el que el servidor está escuchando
});

server.listen(port); // Hace que el servidor empiece a escuchar en el puerto especificado
