const express = require('express'); //rutas
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.PORT = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //middlewares - funcion que siempre va ejecutarse cuando levantemos nuestro servido.
        this.middlewars();
        //Rutas de mi aplicacion
        this.routes();
    }

    middlewars() {
        //Cors
        this.app.use(cors());
        // Lectura y parseo del body
        this.app.use( express.json() );
        //Directorio Publico
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/user'));
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log('Servidor Corriendo en puerto:', this.PORT);
        });
    }


}

module.exports = Server;