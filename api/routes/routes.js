module.exports = function(app)
{
    let api = require('../controllers/controllers').getAllWords;

    app.route('/digits')
        .post(api)
};

