$(document).ready(function() {
  home()
  genre()
})

function home(){
  $.ajax({
    url: 'http://localhost:3000/movies',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      $('.wrapper-body').empty()
      $('.judul-wrap').append(`<h4>POPULAR MOVIES</h4>`)
      var results = data.results
      for (var i = 1; i < results.length; i++) {
        $('.wrapper-body').append(`
          <div class="col-4 left">
            <img src="https://image.tmdb.org/t/p/w640${results[i].poster_path}" class="imgs">\
            <p>Rating: ${results[i].vote_average}</p>
            <h4>${results[i].title}</h4>
            <p>${results[i].release_date}</p>
          </div>
        `)
      }
    },
    fail: function(err) {
      console.log(err)
    }
  })
}

function genre(){
  $.ajax({
    url: 'http://localhost:3000/movies/genreList',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      console.log(data);
      $('.genre-ul').empty()
      var results = data.genres
      for (var i = 1; i < results.length; i++) {
        $('.genre-ul').append(`
          <li class="list-genre" onclick="genremovie($(this))" value="${results[i].id}">${results[i].name}</li>
        `)
      }
    },
    fail: function(err) {
      console.log(err)
    }
  })
}
// })

function genremovie(genre){
  var gen = genre.val();
  $.ajax({
    url: `http://localhost:3000/movies/genre/${gen}`,
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      $('.wrapper-body').empty()
      $('.judul-wrap').empty()
      $('.judul-wrap').append(`<h4>Genre ${genre[0].innerHTML}</h4>`)
      var results = data.results
      for (var i = 1; i < results.length; i++) {
        $('.wrapper-body').append(`
          <div class="col-4 left">
            <img src="https://image.tmdb.org/t/p/w640${results[i].poster_path}" class="imgs">\
            <p>Rating: ${results[i].vote_average}</p>
            <h4>${results[i].title}</h4>
            <p>${results[i].release_date}</p>
          </div>
        `)
      }
    },
    fail: function(err) {
      console.log(err)
    }
  })
}
