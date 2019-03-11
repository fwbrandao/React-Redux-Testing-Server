module.exports = function(app) {

    // HTTP REQUEST GET
    app.get('/', function(req, res, next) {
        res.send(['a', 'b', 'c']);
    });
}