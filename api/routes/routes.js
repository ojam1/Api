module.exports = function(app)
{
    let api = require('../controllers/controllers').get_all_words;

    app.route('/digits')
        .post(api)
};

