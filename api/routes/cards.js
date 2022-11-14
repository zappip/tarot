const express = require("express");
const router = express.Router();
const fetch = require('node-fetch');


router.get("/", function (req, res, next) {
    fetch("https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=10")
        .then(response => response.json())
        .then(response => {
            const newResponse = response.cards
            res.json(newResponse);
        })
        .catch(function (error) {
        });
});

module.exports = router;