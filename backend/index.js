import express from 'express';
import { controllers } from './controllers/controllers.js';
import { errorHandlerMiddleware } from './middlewares/error_handler_middleware.js';
import { logMiddleware } from './middlewares/log_middleware.js';
import config from './config.js';
import mongoose from 'mongoose';
import configureDependencies from './configure.dependencies.js';

if (!config.jwtKey){
    console.error(`No se ha definido un jwtKey en la configuración. Por favor creer un archivo config.local.js segun se especifica en su config.js.`);
    process.exit(1);
}

console.log(config.dbConnection);
mongoose.connect(config.dbConnection)
    .then(() => console.log('Conexión exitosa a MongoDB'))
    .catch(error => console.error('Error al conectar:', error));

const app = express();

const router = express.Router();
app.use('/api', router);

router.use(express.json());
router.use(logMiddleware);

controllers(router);

router.use(errorHandlerMiddleware);

configureDependencies();

const PORT = 3000;
app.listen(
    PORT, 
    () => {
    console.log(`Servidor corriendo en http://localhost:${config.port}`);
    }
);

console.log('backend');