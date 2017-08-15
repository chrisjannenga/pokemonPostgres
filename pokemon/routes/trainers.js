var express = require('express');
var router = express.Router();
var knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    database: 'pokemon'
  }
});


/* GET home page. */
router.get('/', function(req, res, next) {
  knex.raw('SELECT name FROM trainers;')
    .then(function(data) {
      console.log(data.rows)
      res.render('allPokemon', {
        title: 'Express',
        allPokemon: data.rows
      });
    })
    .catch(function(err) {
      /*throw err;*/
      console.log(err);
      res.json(err);
    })
  console.log("HELLOOOOO")
});

router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  knex.raw(`SELECT * FROM trainers WHERE id = ${req.params.id}`)
    .then(function(data) {
      console.log(data.rows)
      res.render('allPokemon', {
        title: 'Express',
        allPokemon: data.rows
      });
    })
    .catch(function(err) {
      /*throw err;*/
      console.log(err);
      res.json(err);
    })
})

module.exports = router;
