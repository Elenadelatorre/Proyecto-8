const { getPlayers, getPlayersByPosition, postPlayer, putPlayer, deletePlayer } = require ("../controllers/players");
const { isUser, isAdmin } = require('../../middlewares/auth');
const playersRouter = require("express").Router();

playersRouter.get("/position/:position",[isUser], getPlayersByPosition);
playersRouter.get("/",[isUser], getPlayers);
playersRouter.post("/",[isAdmin], postPlayer);
playersRouter.put("/:id",[isAdmin], putPlayer);
playersRouter.delete("/:id",[isAdmin], deletePlayer);  

module.exports = playersRouter;