const mongoose = require('mongoose');
// 连接数据库
mongoose.connect("mongodb://172.0.0.1:27017/blog",{useMongoClient:true});
//如没有创建用户则："mongodb://172.0.0.1:27017/test

const db = mongoose.connection;
db.once('error',() => console.log('Mongo connection error'));
db.once('open',() => console.log('Mongo connection successed'));

const loginSchema = mongoose.Schema({
    account : String,
    password : String
});


const Models = {
    Login : mongoose.model('Login',loginSchema)
}

module.exports = Models
————————————————
版权声明：本文为CSDN博主「疯狂的亮坨坨」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_28027903/article/details/77929618