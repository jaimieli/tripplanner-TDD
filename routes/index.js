var express = require('express');
var router = express.Router();

/* GET home page. */
var models = require('../models');

router.get('/', function(req, res) {
  models.Hotel.find(function(err, hotels) {
    models.Restaurant.find(function(err, restaurants) {
      models.ThingsToDo.find(function(err, thingtodos) {
        res.render('index', {hotels: hotels, restaurants: restaurants, thingtodos:thingtodos, title: "Trip Planner" });
      });
    });
  });
});

router.get('/test_route', function(req, res) {
  res.json(200);
});

router.get('/data', function(req, res) {
  models.Hotel.find(function(err, hotels) {
    models.Restaurant.find(function(err, restaurants) {
      models.ThingsToDo.find(function(err, thingtodos) {
        res.json({hotels: hotels, restaurants: restaurants, thingtodos:thingtodos, title: "Trip Planner"});
      });
    });
  });
});

module.exports = router;
