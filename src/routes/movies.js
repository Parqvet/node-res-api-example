const { Router } = require('express');
const router = Router();

const _ = require('underscore');

// para ver los datos del archivo json lo importo desde aqui
const movies = require('../movies.json');

router.get('/', (req, res) => {
    res.send(movies);
})

router.post('/', (req, res) => {
    const { title, director, year, rating } = req.body;
    if(title && director && year && rating) {

        // para agregar un nuevo id a cada movie entrante se lo agrego al final del array, cuento su longitud y le sumo 1
        const id = movies.length + 1;
        newMovie = {...req.body, id};
        movies.push(newMovie);

        res.json(movies)
    } else {
        res.status(500).json({error: "There was an error"})
    }
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, director, year, rating } = req.body;

    if (title && director && year && rating) {
        _.each(movies, (movie, i) => {
            if (movie.id == id) {
                movie.title = title;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
            }
        });
        res.json(movies)
    } else {
        res.status(500).json({error: "There was an error"});
    }

});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(movies, (movie, i) => {
        if (movie.id == id) {
            movies.splice(i, 1)
        }
    });
    res.send(movies);
})

module.exports = router;