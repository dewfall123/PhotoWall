'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller, middleware } = app;
    router.get('/', controller.site.index);
    // restful api
    router.resources('blogs', '/api/blogs', controller.blog);
    // 图片上传
    router.post('/api/img/upload', controller.blog.upload);
    router.get('/api/testlogin', controller.user.testLogin);
    router.get('/api/login', controller.user.login);
};
