'use strict';

const express = require('express');
const router = express.Router();
const gamesController = require('../controllers/games');
const othersController = require('../controllers/others');


/* -- Flight Pages -- */
/* GET home page. */
router.get('/', gamesController.gamesList);

/* GET the game details page */
router.get('/game', gamesController.gamesDetails);

/* GET the game ticket page */
router.get ('/game/tickets', gamesController.tickets);


/* -- Other Pages -- */
/* GET about pages */
router.get('/about', othersController.about);


module.exports = router;


















//var mainController = require('../controllers/main');

/* GET home page. */

//router.get('/', mainController.index);




/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
*/