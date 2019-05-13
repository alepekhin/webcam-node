const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');


const app = new Koa();
const router = new Router();

const todosRouter = require('./todos/controller');

app.use(cors({origin:'http://localhost:3000'}));
app.use(bodyParser());
app.use(todosRouter());
app.use(router.allowedMethods());

app.listen(4000);