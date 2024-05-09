const usersRouter = require('express').Router();
const { getUsers, register, login, putUser, deleteUser} = require('../controllers/user');

usersRouter.get('/', getUsers);
usersRouter.post('/register', register);
usersRouter.post('/login', login);
usersRouter.put('/:id', putUser);
usersRouter.delete('/:id', deleteUser);


module.exports = usersRouter;