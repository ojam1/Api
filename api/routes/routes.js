module.exports = function(app)
{
    let api = require('../controllers/controllers');

    app.route('/digits')
        .post(api.get_all_words)
};