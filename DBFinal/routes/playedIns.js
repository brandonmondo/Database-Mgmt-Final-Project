var express = require('express');
var router = express.Router();
var playedInsDal   = require('../dal/playedIns.js');

router.get('/all', function(req, res) {
    playedInsDal.GetAll(function (err, result) {
            if (err) throw err;
            //NOTE: res.send() will return plain text to the browser.
            //res.send(result);

            //res.render() will return render the template provided
            res.render('displayAllPlayedIns.ejs', {rs: result});
        }
    );
});

router.get('/', function (req, res) {
    playedInsDal.GetByID(req.query.mID, req.query.pID,  function (err, result) {
            if (err) throw err;

            res.render('displayPlayedIn.ejs', {rs: result, mID: req.query.mID, pID: req.query.pID});
        }
    );
});

module.exports = router;