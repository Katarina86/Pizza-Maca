"use strict";

var model = require("./model.js");

module.exports.query = query;
module.exports.save = save;
module.exports.show = show;

function query(req, res) {
    model.load(req.params.entity, function(entities) {
        console.log(req.query);
        if(req.query.discount) {
            entities = entities.filter(function(obj) {
                return obj.discount;
            });
        }
        if(req.query.vegetarian) {
            entities = entities.filter(function(obj) {
                return obj.vegetarian;
            });
        }
        res.status(200).json({ results: entities });
    });
}

function save(req, res) {
    model.load(req.params.entity, function(entities) {
        var lastId = 1
        if(entities.length > 0){
            lastId = parseInt(entities[entities.length - 1]._id);
        }
        req.body._id = lastId + 1;
        entities.push(req.body);
        model.save(req.params.entity, entities);
        res.status(200).json(req.body);
    });
}

function show(req, res) {
    model.load(req.params.entity, function(entities) {
        for(var i = 0, n = entities.length; i < n; i++) {
            var elem = entities[i];
            if(req.params.id === elem._id.toString()) {
                res.status(200).json(elem);
                return;
            }
        }
        res.status(404).json({});
    });
}