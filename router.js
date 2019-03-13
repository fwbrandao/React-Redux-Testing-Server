const Authentication = require('./controllers/authentication')

module.exports = function(app) {

    app.post('/signup', Authentication.signup);

    // HTTP GET REQUEST
    app.get('/', function(req, res, next) {
        res.send(['a', 'b', 'c']);
    });
}