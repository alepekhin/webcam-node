const Router = require('koa-router');
const url = '/webcam';
const { doRegister, doGetFiles, doGetImage, doSetImage } = require('./service');

const todosRouter = function moduleRouter() {
  const router = new Router();
  router.get(url+'/register', async (ctx, next) => {
    ctx.body = doRegister();
  });
  router.get(url+'/:webcamid', async (ctx, next) => {
    ctx.body = doGetFiles(ctx.params.webcamid);
  });
  router.get(url+'/:webcamid/:file', async (ctx, next) => {
    ctx.type = 'image/jpg';
    ctx.body = doGetImage(ctx.params.webcamid, ctx.params.file);
  });
  router.post(url, async (ctx, next) => {
    ctx.body = await doSetImage(ctx.request.body);
  });
  return router.routes();
}

module.exports  = todosRouter;