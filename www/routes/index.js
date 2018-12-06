var router = require('express').Router();

router.get('/', (req, res, next) => {
    res.render('index', {title: 'Hello World'});
});

module.exports = router;
/*
 * GET home page.
 */

// exports.index = function(req, res) {
//     res.render('index', {title: 'Hello World'});
// };