const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {

    // HTTP GET REQUEST
    app.get('/', requireAuth, function(req, res) {
        res.send(['a', 'b', 'c']);
    });

    // HTTP POST REQUEST
    app.post('/signin', requireSignin, Authentication.signin);
    app.post('/signup', Authentication.signup);
}