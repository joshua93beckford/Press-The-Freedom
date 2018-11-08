const db = require('../models');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('bbbe5e03f1b34fdfbe7823f7a7e6e3df');

module.exports = {
    addSources: function (req, res) {
     newsapi.v2.sources({
        language: 'en',
        country: ''
    }).then(response => {
        var result = {};
        for (var i = 0; i < response.sources.length; i++) {
            result = {}
            result.sourceid = response.sources[i].id
            result.name = response.sources[i].name
            result.description = response.sources[i].description
            result.url = response.sources[i].url
            result.category = response.sources[i].category
            result.language = response.sources[i].language
            result.country = response.sources[i].country
            result.credtotal = 0;
            result.reltotal = 0;
            result.acctotal = 0;
            result.totalusers = 0;
            result.rating = 0;
            db.Source.create(result)
                .then(function (dbSource) {
                })
                .catch(function (err) {
                    return res.json(err);
                });
        }
        res.json(response)

    }).catch(function (err) {
        return res.json(err);
    });
    },
    setRating: function (req,res){
        db.Source.find({ sourceid: req.body.source }).then(dbsource => {
            var source = {}
            if (dbsource.length != 0) {
                source.credtotal = dbsource[0].credtotal + parseInt(req.body.credible);
                source.reltotal = dbsource[0].reltotal + parseInt(req.body.relevant);
                source.acctotal = dbsource[0].acctotal + parseInt(req.body.accurate);
                source.totalusers = dbsource[0].totalusers + 1;
                let totalRating = source.credtotal + source.reltotal + source.acctotal;
                source.rating = totalRating / source.totalusers;
    
                db.Source.findByIdAndUpdate(dbsource[0]._id, {
                    $set: {
                        'credtotal': source.credtotal,
                        'reltotal': source.reltotal,
                        'acctotal': source.acctotal,
                        'totalusers': source.totalusers,
                        'rating': source.rating
    
                    }
                }).then(result => {
                   res.json('Source Rating Updated');
                }).catch(err => {
                    res.json(err);
                })
            }
        })
    },
    topTenRating: function (req,res){
        db.Source.find().sort({ rating: -1 }).limit(10)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findAll: function (req,res){
        db.Source.find({})
                .then(dbModel => res.json(dbModel))
                .catch(err => res.status(422).json(err));
    }

};