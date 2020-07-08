const xss = require('xss')
const { exec } = require('../db/mysql')

const getArticleList = (username, key) => {
    let sql = `select * from article where 1=1 `
    if (username) {
        sql += `and username='${username}' `
    }
    if (key) {
        sql += `and title like '%${key}%' `
    }
    sql += `order by createtime desc;`

    // 返回 promise
    return exec(sql)
}

const getArticleDetail = (articleId) => {
    const sql = `select * from article where articleId='${articleId}'`
    return exec(sql).then(rows => {
        return rows[0]
    })
}

const newArticle = (articleData = {}) => {
    const title = xss(articleData.title)
    const content = xss(articleData.content)
    const username = articleData.username
    const type = articleData.type
    const createTime = Date.now()

    const sql = `
        insert into article (title, content, createtime, username,type)
        values ('${title}', '${content}', ${createTime}, '${username}', '${type}');
    `

    return exec(sql).then(insertData => {
        return {
            id: insertData.insertId
        }
    })
}

const updateArticle = (articleData) => {
    const articleId=articleData.articleId
    const title = xss(articleData.title)
    const content = xss(articleData.content)
    const type = articleData.type
    const createTime = Date.now()

    const sql = `
        update article set title='${title}', content='${content}', type='${type}', createTime='${createTime}' where articleId=${articleId}
    `

    return exec(sql).then(updateData => {
        if (updateData.affectedRows > 0) {
            return true
        }
        return false
    })
}

const delArticle = (articleId) => {
    // id 就是要删除博客的 id
    const sql = `delete from article where articleId='${articleId}';`
    return exec(sql).then(delData => {
        if (delData.affectedRows > 0) {
            return true
        }
        return false
    })
}

module.exports = {
    getArticleList,
    getArticleDetail,
    newArticle,
    updateArticle,
    delArticle
}
