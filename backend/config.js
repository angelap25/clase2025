// Cree un archivo local cofig.local.js donde coloque los valores que no se almacenan en el repositorio

import configLocal from './config.local.js';

var config = {
    port: 3005,
    ... configLocal,
};

export default config;