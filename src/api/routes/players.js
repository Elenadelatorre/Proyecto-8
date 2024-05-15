const {
  getPlayers,
  getPlayersByPosition,
  postPlayer,
  putPlayer,
  deletePlayer
} = require('../controllers/players');
const { isUser, isAdmin } = require('../../middlewares/auth');
const { uploadPlayers } = require('../../middlewares/configurarMulter');
const playersRouter = require('express').Router();

playersRouter.get('/position/:position', [isUser], getPlayersByPosition);
playersRouter.get('/', [isUser], getPlayers);
playersRouter.post('/', [isUser], uploadPlayers.single('img'), postPlayer);
playersRouter.put('/:id', [isAdmin], uploadPlayers.single('img'), putPlayer);
playersRouter.delete('/:id', [isUser], deletePlayer);

module.exports = playersRouter;
