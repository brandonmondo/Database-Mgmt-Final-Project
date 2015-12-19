var express = require('express');
var router = express.Router();
var matchesDal   = require('../dal/matches.js');

router.get('/all', function(req, res) {
    matchesDal.GetAll(function (err, result) {
            if (err) throw err;
            //NOTE: res.send() will return plain text to the browser.
            //res.send(result);

            //res.render() will return render the template provided
            res.render('displayAllMatches.ejs', {rs: result});
        }
    );
});

router.get('/', function (req, res) {
    matchesDal.GetByID(req.query.mID, function (err, result) {
            if (err) throw err;

            res.render('displayMatch.ejs', {rs: result, mID: req.query.mID});
        }
    );
});

module.exports = router;