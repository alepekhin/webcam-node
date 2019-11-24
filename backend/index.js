const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');


const app = new Koa();
const router = new Router();

const todosRouter = require('./app/controller');

app.use(cors({origin:'http://localhost:3000'}));
// allow images up to 5 Mb 
app.use(bodyParser({jsonLimit: 5000000}));
app.use(todosRouter());
app.use(router.allowedMethods());

app.listen(4000);