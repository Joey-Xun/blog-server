var createError = require('http-errors');
var express = require('express');
var path = require('path');
var fs = require('fs');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session')
const RedisStore = require('connect-redis')(session)

var articleRouter = require('./routes/article');
var userRouter = require('./routes/user');

var app = express();


// 拦截所有请求
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Credentials', 'true');
	res.header('Access-Control-Allow-Methods', 'get,post');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
	next();
});

const ENV = process.env.NODE_ENV
if (ENV !== 'production'){
  app.use(logger('dev'));
} else {
  const logFileName = path.join(__dirname, 'logs', 'access.log')
  const writeStream = fs.createWriteStream(logFileName, {
    flags: 'a'
  })
  app.use(logger('combined', {
    stream: writeStream
  }))
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const redisClient = require('./db/redis')
const sessionStore= new RedisStore({
  client: redisClient
})
app.use(session({
  secret: 'WJiol#23123_',
  cookie: {
    maxAge: 24 * 60 * 60 * 1000
  },
  store: sessionStore
}))


app.use('/api/article', articleRouter);
app.use('/api/user', userRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'dev' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
