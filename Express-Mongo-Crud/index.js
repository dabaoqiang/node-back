// 尽早在应用程序中导入并配置 dotenv
require('dotenv').config();
console.log(process.env) 

// 数据库配置
// 设置数据库配置信息
const mongoString = process.env.DATABASE_URL;
// 获取数据库模块
const mongoose = require('mongoose');
// 进行连接
mongoose.connect(mongoString);
// 获取连接
const database = mongoose.connection;
// 连接事件,异常
database.on('error', (error) => {
    console.log(error)
})
// 连接一次
database.once('connected', () => {
    console.log('Database Connected');
})

// express应用配置
const express = require('express');
// 初始化app
const app = express();
// 使用json返回
app.use(express.json());

// 获取应用里面的控制器 
const routes = require('./routes/routes');
// 进行注入
app.use('/api', routes);

// express容器进行监听端口
app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})