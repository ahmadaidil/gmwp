var express = require('express');
var router = express.Router();
require('dotenv').config()
const mdb = require('moviedb')(`${process.env.APIKEY}`);

router.get('/', (req, res) => {
  mdb.miscPopularMovies((err, movies)=>{
    if(err) res.send(err)
    else res.json(movies)
  })
});

router.get('/genrelist', (req, res) =>{
  mdb.genreMovieList((err, genre)=>{
    if(err) res.send(err)
    else res.json(genre)
  })
});

router.get('/trailer/:id', (req, res) =>{
  mdb.movieTrailers({id:req.params.id},(err, trailer)=>{
    if(err) res.send(err)
    else res.json(trailer)
  })
});

router.get('/:id', (req, res) =>{
  mdb.movieInfo({id:req.params.id},(err, movieinfo)=>{
    if(err) res.send(err)
    else res.json(movieinfo)
  })
});

router.get('/genre/:id', (req, res)=>{
  mdb.genreMovies({id:req.params.id},(err, genre)=>{
    if(err) res.send(err)
    else res.json(genre)
  })
})

router.get('/search/:movie', (req, res)=>{
  mdb.searchMovie({query:req.params.movie},(err, genre)=>{
    if(err) res.send(err)
    else res.json(genre)
  })
})

module.exports = router;