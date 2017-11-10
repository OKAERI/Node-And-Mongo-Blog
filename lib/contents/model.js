var mongoose = require('../db').mongoose;
var Schema = mongoose.Schema;

// 定义 contents 模型
var ContentSchema = new Schema({
    title: String,
    content: String
    // content: { type: String, required: true }
});

module.exports = mongoose.model('Content', ContentSchema);