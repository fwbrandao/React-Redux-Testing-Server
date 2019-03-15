const User = require('../models/user');

exports.signup = function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        return res.status(422).send({error: 'Please provide email and password'});
    }

    User.findOne({ email: email }, function(err, existingUser){
        if (err) { return next(err);}

        // If user does exist, return error
        if (existingUser) {
            return res.status(422).send({error: 'Email in use'});
        }

        // If user does not exist, return error
        const user = new User({
            email: email,
            password: password
        });

        user.save(function(err) {
            if (err) {
                return next(err);
            }
        // User was created
        res.json(user);
        })

    });
}