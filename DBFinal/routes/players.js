var express = require('express');
var router = express.Router();
var playersDal   = require('../dal/players.js');

router.get('/all', function(req, res) {
    playersDal.GetAll(function (err, result) {
            if (err) throw err;
            //NOTE: res.send() will return plain text to the browser.
            //res.send(result);

            //res.render() will return render the template provided
            res.render('displayAllPlayers.ejs', {rs: result});
        }
    );
});

router.get('/', function (req, res) {
    playersDal.GetByID(req.query.pID, function (err, result) {
            if (err) throw err;

            res.render('displayPlayer.ejs', {rs: result, pID: req.query.pID});
        }
    );
});

module.exports = router;