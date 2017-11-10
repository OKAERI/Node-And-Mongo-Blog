var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = require('./lib/router');

// 端口号
var port = process.env.PORT || 3000;

// 配置bodyParser中间件 在路由中处理request时 可以直接获得post请求的body部分
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 解决跨域问题
app.all('/api/*', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', req.headers && req.headers.origin ? req.headers.origin : '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    if(req.method === 'OPTIONS'){
        res.send(200);
    }else{
        next();
    }
})

// 路由 以api开头
app.use('/api', router);

// 监听
var server = app.listen(port, function () {
    console.log('服务已启动，端口号', port);
});