var Content = require('./model');

module.exports.findAll = function (options, callback) {
    Content.find(options, function (error, content) {
        callback(error, content);
    });
};

module.exports.getByID = function (contentId, callback) {
    Content.findById(contentId, function (error, content) {
        callback(error, content);
    });
};

module.exports.save = function (contentFields, callback) {
    Content.create(contentFields, function (error, content) {
        callback(error, content);
    });
};