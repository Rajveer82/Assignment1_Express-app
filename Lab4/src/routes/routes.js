const express = require('express');
const { getMovies, createMovie, getMovieById, updateMovie, deleteMovie, importMovies } = require('../controllers/controller');

const router = express.Router();
//Route to get all movies with search and filter functionality
router.get('/movies', getMovies);

// other routes for creating, updating, deleting movies
router.post('/movies', createMovie);
router.get('/movies/:id', getMovieById);
router.put('/movies/:id', updateMovie);
router.delete('/movies/:id', deleteMovie);

//Route to import movies
router.post('/movies/import', importMovies);


module.exports = router;