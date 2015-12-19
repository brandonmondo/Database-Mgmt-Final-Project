var express = require('express');
var router = express.Router();
var playerHeroStatsDal   = require('../dal/playerHeroStats.js');

router.get('/all', function(req, res) {
    playerHeroStatsDal.GetAll(function (err, result) {
            if (err) throw err;
            //NOTE: res.send() will return plain text to the browser.
            //res.send(result);

            //res.render() will return render the template provided
            res.render('displayAllPlayerHeroStats.ejs', {rs: result});
        }
    );
});

router.get('/', function (req, res) {
    playerHeroStatsDal.GetByID(req.query.pID, req.query.hID,  function (err, result) {
            if (err) throw err;

            res.render('displayPlayerHeroStats.ejs', {rs: result, pID: req.query.pID, hID: req.query.hID});
        }
    );
});

module.exports = router;