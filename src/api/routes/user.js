const usersRouter = require('express').Router();
const { getUsers, register, login, putUser, deleteUser} = require('../controllers/user');
const {isUser, isAdmin} = require('../../middlewares/auth');
const upload = require('../../middlewares/file');

usersRouter.get('/',[isUser], getUsers);
usersRouter.post('/register',upload.single('img'), register);
usersRouter.post('/login', login);
usersRouter.put('/:id',[isAdmin], putUser);
usersRouter.delete('/:id',[isAdmin], deleteUser);


module.exports = usersRouter;