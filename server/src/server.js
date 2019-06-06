"use strict";

var express = require("express"),
	app = express(),
    bodyParser = require("body-parser"),
    cors = require("cors"),
    controller = require("./controller.js");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cors());

app.use(express.static(__dirname + '/public'));

app.route("/api/:entity")
    .get(controller.query)
    .post(controller.save);
app.route("/api/:entity/:id")
    .get(controller.show)

app.listen(3000, function() {
    console.log("Server started");
});