import app from './src/app.js';


const HOST = `127.0.0.1`;
const PORT = 3000;

const server = app.listen(PORT, HOST, () => {

    console.log(`O servidor ${HOST}:${PORT} está rodando...`);
});