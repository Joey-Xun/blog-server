const express = require('express');
const router = express.Router();
const { login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

router.post('/login', function(req, res, next) {
    const { username, password } = req.body
    const result = login(username, password)
    result.then(data => {
        if (data.username) {
            // 设置 session
            req.session.username = data.username
            res.json(
                new SuccessModel()
            )
            return
        }
        res.json(
            new ErrorModel('登录失败')
        )
    })
})


module.exports = router;