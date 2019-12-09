const models = require('./db');
const express = require('express');
const router = express.Router();

// 创建账号
router.post('/api/login/createAccount',(req,res) => {
    let newAccount = new models.Login({
        account : req.body.account,
        password : req.body.password
    });
    newAccount.save((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send('Create success');
        }
    });
});

// 获取全部账号
router.get('/api/login/getAccount',(req,res) => {
    // 查找数据库
    models.Login.find((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});

module.exports = router;
 