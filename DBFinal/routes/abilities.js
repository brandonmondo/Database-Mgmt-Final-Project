var express = require('express');
var router = express.Router();
var abilitiesDal   = require('../dal/abilities.js');

router.get('/all', function(req, res) {
    abilitiesDal.GetAll(function (err, result) {
            if (err) throw err;
            //NOTE: res.send() will return plain text to the browser.
            //res.send(result);

            //res.render() will return render the template provided
            res.render('displayAllAbilities.ejs', {rs: result});
        }
    );
});

router.get('/', function (req, res) {
    abilitiesDal.GetByID(req.query.hID, function (err, result) {
            if (err) throw err;

            res.render('displayAbilities.ejs', {rs: result, hID: req.query.hID});
        }
    );
});

module.exports = router;