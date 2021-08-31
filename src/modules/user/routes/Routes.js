const { Router } = require('express');

const UserRouter = Router();
const { UserService, UserAuthentication, UserRegistration } = require('../services');
const { findUser } = require('../middlewares');

const prefix = '/users';

UserRouter.post(`${prefix}/register`, UserRegistration.singUp);
UserRouter.post(`${prefix}/auth`, UserAuthentication.signIn);
UserRouter.post(`${prefix}/search`, UserService.search);
UserRouter.get(`${prefix}/:id`, findUser, UserService.get);
UserRouter.patch(`${prefix}/:id`, findUser, UserService.update);
UserRouter.delete(`${prefix}/:id`, findUser, UserService.remove);

module.exports = UserRouter;
