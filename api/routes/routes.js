module.exports = function(app)
{
    let api = require('../controllers/controllers');

    app.route('/digits')
        .get(api.get_all_words)
};