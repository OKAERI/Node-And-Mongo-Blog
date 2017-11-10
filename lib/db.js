var mongoose = require('mongoose'); // 加载mongoose模块
var url = 'mongodb://127.0.0.1:27017/test_api'; // 连接mongodb的url test_api 是库名

mongoose.connect(url); // 连接数据库

module.exports.mongoose = mongoose;