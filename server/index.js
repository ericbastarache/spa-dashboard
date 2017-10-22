// import Koa from 'koa';
// import index from './routes/index';
const Koa = require('koa');
const index = require('./routes/index.js');
const app = new Koa();
const koaCors = require('koa-cors');

app.use(index.routes(), index.allowedMethods(), koaCors());

app.listen(3001);
module.exports = app;