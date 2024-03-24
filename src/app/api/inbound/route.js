import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const data = await req.json();
        console.log(data); // Hacer algo con los datos recibidos
        
        // Responder con un mensaje de éxito
        return NextResponse.json({ mensaje: "Recibiendo estado", status: 200 });
        
    } catch (error) {
        console.error('Error:', error);
        // Responder con un mensaje de error
        return new NextResponse.json({ Webhook_error: error.message, status: 500 });
    }
}

// Establecer la URL base manualmente


// import http from 'http';

// // Crea un servidor HTTP utilizando la API de http de Node.js
// const server = http.createServer((req, res) => {
//   // Maneja las solicitudes POST en la ruta /webhooks/vonage
//   if (req.method === 'GET' && req.url === '/api/inbound/') {
//     let body = '';
//     // Escucha los eventos 'data' y 'end' para recopilar el cuerpo de la solicitud
//     req.on('data', (chunk) => {
//       body += chunk;
//     });
//     req.on('end', () => {
//       try {
//         // Parsea el cuerpo de la solicitud como JSON
//         const data = JSON.parse(body);
//         // Aquí puedes manejar la lógica de tu webhook
//         console.log('Datos recibidos:', data);
//         // Responde con un código de estado 200 (OK)
//         res.writeHead(200);
//         res.end('Webhook de Vonage recibido correctamente');
//       } catch (error) {
//         // Si hay un error al analizar el cuerpo JSON de la solicitud, responde con un código de estado 400 (Bad Request)
//         console.error('Error al analizar el cuerpo de la solicitud:', error);
//         res.writeHead(400);
//         res.end('Error al analizar el cuerpo de la solicitud');
//       }
//     });
//   } else {
//     // Si la solicitud no es un POST a /webhooks/vonage, responde con un código de estado 404 (Not Found)
//     res.writeHead(404);
//     res.end('Ruta no encontrada');
//   }
// });

// // Inicia el servidor y escucha en el puerto 3000
// server.listen(3010, () => {
//   console.log('Servidor HTTP iniciado en el puerto 3001');
// });