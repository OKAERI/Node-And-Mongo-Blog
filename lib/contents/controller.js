var ContentManager = require('./manager');

module.exports.find = function (req, res, next) {
    var options = {};
    if (req.params.content_id) {
        ContentManager.getByID(req.params.content_id, function (error, result) {
            if (error) {
                // 正常情况 你在外面有一个错误拦截
                console.error(error);
                res.status(400).json({ message: '报错了' });
            } else {
                console.log(result);
                res.json({ message: result });
            }
        });
    } else {
        ContentManager.findAll({}, function (error, result) {
            if (error) {
                // 正常情况 你在外面有一个错误拦截
                console.error(error);
                res.status(400).json({ message: '报错了' });
            } else {
                console.log(result);
                res.json({ message: result });
            }
        });
    }
};

module.exports.save = function (req, res, next) {
    ContentManager.save({
        title: req.body.title || '',
        content: req.body.content || ''
    }, function(error, result) {
        if (error) {
            // 正常情况 你在外面有一个错误拦截
            console.error(error);
            res.status(400).json({ message: '报错了' });
        } else {
            console.log(result);
            res.json({ message: result });
        }
    });
};