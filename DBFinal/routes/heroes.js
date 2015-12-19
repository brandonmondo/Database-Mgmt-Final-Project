var express = require('express');
var router = express.Router();
var heroesDal   = require('../dal/heroes.js');

router.get('/all', function(req, res) {
    heroesDal.GetAll(function (err, result) {
            if (err) throw err;
            //NOTE: res.send() will return plain text to the browser.
            //res.send(result);

            //res.render() will return render the template provided
            res.render('displayAllHeroes.ejs', {rs: result});
        }
    );
});

router.get('/', function (req, res) {
    heroesDal.GetByID(req.query.hID, function (err, result) {
            if (err) throw err;

            res.render('displayAbilities.ejs', {rs: result, hID: req.query.hID});
        }
    );
});

module.exports = router;