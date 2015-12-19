var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.GetAll = function(callback) {
    connection.query('SELECT * FROM playedIn ORDER BY mID, pID;',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            console.log(result);
            callback(false, result);
        }
    );
}


exports.GetByID = function(mID, pID, callback) {
    console.log(mID, pID);
    var query = 'SELECT * FROM playedIn pi WHERE mID=' + mID + ' AND pID =' + pID + 'JOIN gameMatch gm' +
        'ON gm.mID = pi.mID ORDER BY pi.mID, pi.pID';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}