const { getPlayers, getPlayersByPosition, postPlayer, putPlayer, deletePlayer } = require ("../controllers/players");
const playersRouter = require("express").Router();

playersRouter.get("/position/:position", getPlayersByPosition);
playersRouter.get("/", getPlayers);
playersRouter.post("/", postPlayer);
playersRouter.put("/:id", putPlayer);
playersRouter.delete("/:id", deletePlayer);  

module.exports = playersRouter;