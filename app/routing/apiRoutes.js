// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// Require express, path and require list of friends data.
// ===============================================================================
var express = require('express');
var path = require('path');
var friendsData = require('../data/friends');
var router = express.Router();

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // List of friend data.
    // ---------------------------------------------------------------------------

    router.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // Adds new friend to the friend data array.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // Then the server saves the data to the friendsData array)
    // ---------------------------------------------------------------------------

    router.post("/api/friends", function (req, res) {
       console.log(req.body);
       var userData = req.body;
        // req.body is available since we're using the body-parser middleware
        // loop through friends data array and compare surveyResults 
        // with each friend data entry

        for(var i=0; i < friendsData.length; i++) {
            // compare user survey data to current friend survey data
            for(var j=0; j < friendsData[i].surveyResults.length; j++) {
                
            }
        };

    });
   
};
