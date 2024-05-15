const usersRouter = require('express').Router();
const {
  getUsers,
  register,
  login,
  putUser,
  deleteUser
} = require('../controllers/user');
const { isUser, isAdmin } = require('../../middlewares/auth');
const { uploadUsers } = require('../../middlewares/configurarMulter');

usersRouter.get('/', [isUser], getUsers);
usersRouter.post('/register', uploadUsers.single('img'), register);
usersRouter.post('/login', login);
usersRouter.put('/:id', [isAdmin], uploadUsers.single('img'), putUser);
usersRouter.delete('/:id', [isUser], deleteUser);

module.exports = usersRouter;
