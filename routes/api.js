// API routes
var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models').Hotel;
var Restaurant = require('../models').Restaurant;
var Activity = require('../models').Activity;

router.get('/hotels', function (req, res, next) {
    Hotel.findAll()
        .then(self => {
            res.json({hotels: self});
        })
        .catch(next);
});

router.get('/restaurants', function (req, res, next) {
    Restaurant.findAll()
        .then(self => {
            res.json({restaurants: self});
        })
        .catch(next);
});

router.get('/activities', function (req, res, next) {
    Activity.findAll()
        .then(self => {
            res.json({activities: self});
        })
        .catch(next);
});

router.get('/options', function (req, res, next) {
    Promise.all([
        Hotel.findAll(),
        Restaurant.findAll(),
        Activity.findAll()
    ])
        .spread(function (dbHotels, dbRestaurants, dbActivities) {
            res.json({
                hotels: dbHotels,
                restaurants: dbRestaurants,
                activities: dbActivities
            });
        })

        .catch(next);
});


module.exports = router;
