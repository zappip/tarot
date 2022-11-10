const express = require("express");
const router = express.Router();
const fetch = require('node-fetch');


router.get("/", function (req, res, next) {
    fetch("https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=10")
        .then(response => response.json())
        .then(response => {
            //logic
            const newResponse = response.cards
            // .map(x => {
            //     return {
            //         name_short: x.name_short,
            //         name: x.name,
            //         meaning_up: x.meaning_up,
            //         meaning_rev: x.meaning_rev,
            //         desc: x.desc
            //     }
            // });






            res.json(newResponse);
        })
        .catch(function (error) {
            // handle what went wrong
        });
});

module.exports = router;