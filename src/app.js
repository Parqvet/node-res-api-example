const express = require('express');
const morgan = require('morgan');
const app = express();


// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
// para poder recibir datos en formato json desde un formulario y poder entenderlo tenemos que configurarlo
app.use(express.urlencoded({extended: false}));
// nuestro servidor tiene que soportar los archivos en formato json y para eso usamos el metodo json
app.use(express.json());

// routes
app.use(require('./routes/index'));
app.use('/api/movies', require('./routes/movies'));

// para que todas mis rutas empiecen con /api, en vez de escribirlo en los archivos de routes, lo puedo hacer desde aca: en todas mis rutas que iniciaran(movies), antes de poder ejecutarlas, le paso como primer parametro /api/movies, le estaria dicendo, todas estas rutas empiezan primero con /api/movies
app.use('/api/movies', require('./routes/movies'));

module.exports = app;