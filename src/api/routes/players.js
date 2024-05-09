const {
  getPlayers,
  getPlayersByPosition,
  postPlayer,
  putPlayer,
  deletePlayer
} = require('../controllers/players');
const { isUser, isAdmin } = require('../../middlewares/auth');
const upload = require('../../middlewares/file');
const playersRouter = require('express').Router();

playersRouter.get('/position/:position', [isUser], getPlayersByPosition);
playersRouter.get('/', [isUser], getPlayers);
playersRouter.post('/', [isAdmin], upload.single('img'), postPlayer);
playersRouter.put('/:id', [isAdmin], putPlayer);
playersRouter.delete('/:id', [isAdmin], deletePlayer);

module.exports = playersRouter;
