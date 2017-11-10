var express = require('express');
var router = express.Router();

var ContentController = require('./contents/controller')

// ping
router.get('/ping', function (req, res) {
    res.json({ message: 'ok' });
});

/**
 *
 * contests
 *
 * GET     /api/v1/contents              获取所有的contents
 * POST    /api/v1/contents              创建一条content
 * GET     /api/v1/contents/:content_id  根据id获取一条content
 * PUT     /api/v1/contents/:content_id  根据id更新一条content
 * DELETE  /api/v1/contents/:content_id  根据id删除一条content
 *
 */
router.route('/v1/contents/:content_id?')
    .get(ContentController.find)
    .post(ContentController.save)
    .put(function (req, res) {
        res.json({ message: '根据id更新一条content' });
    })
    .delete(function (req, res) {
        res.json({ message: '根据id删除一条content' });
    });

module.exports = router;