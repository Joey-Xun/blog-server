var express = require('express');
var router = express.Router();
const {
    getArticleList,
    getArticleDetail,
    newArticle,
    updateArticle,
    delArticle
} = require('../controller/article')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const loginCheck = require('../middleware/loginCheck')

router.get('/list',loginCheck,(req, res, next) => {
    const username = req.query.username || ''
    const key = req.query.key || ''
    const result = getArticleList(username, key)
    result.then(listData => {
        res.json(
            new SuccessModel(listData)
        )
    })

});

router.get('/detail', loginCheck, (req, res, next) => {
    const result = getArticleDetail(req.query.articleId)
    result.then(data => {
        res.json(
            new SuccessModel(data)
        )
    })
});

router.get('/new', loginCheck, (req, res, next) => {
    req.query.username = req.session.username
    const result = newArticle(req.query)
    result.then(data => {
        res.json(
            new SuccessModel(data)
        )
    })
})

router.get('/update', loginCheck, (req, res, next) => {
    const result = updateArticle(req.query)
    result.then(val => {
        if (val) {
            res.json(
                new SuccessModel()
            )
        } else {
            res.json(
                new ErrorModel('删除博客失败')
            )
        }
    })
})

router.get('/delete', loginCheck, (req, res, next) => {
    req.query.username = req.session.username
    const result = delArticle(req.query.articleId)
    result.then(val => {
        if (val) {
            res.json(
                new SuccessModel()
            )
        } else {
            res.json(
                new ErrorModel('删除博客失败')
            )
        }
    })
})

module.exports = router;
