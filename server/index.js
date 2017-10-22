// import Koa from 'koa';
// import index from './routes/index';
const Koa = require('koa');
const index = require('./routes/index.js');
const app = new Koa();

app.use(index.routes(), index.allowedMethods());

app.listen(3001);
module.exports = app;