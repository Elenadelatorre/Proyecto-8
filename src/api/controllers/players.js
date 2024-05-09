const Player = require('../models/players');

// GET todos los jugadores:
const getPlayers = async (req, res, next) => {
  try {
    const players = await Player.find();
    res.status(200).json(players);
  } catch (error) {
    console.log(error);
    return res.status(400).json('Error en la solicitud');
  }
};

//GET por position:
const getPlayersByPosition = async (req, res, next) => {
  try {
    const { position } = req.params;
    const players = await Player.find({ position });
    return res.status(200).json(players);
  } catch (error) {
    return res.status(400).json('Error en la solicitud');
  }
};

//POST jugador
const postPlayer = async (req, res, next) => {
  try {
    const newPlayer = new Player(req.body);
    const playerSaved = await newPlayer.save();
    res.status(201).json(playerSaved);
  } catch (error) {
    console.log(error);
    return res.status(400).json('Error en la solicitud');
  }
};

// PUT actualizar un jugador:
const putPlayer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newPlayer = new Player(req.body);
    newPlayer._id = id;
    const playerUpdated = await Player.findByIdAndUpdate(id, newPlayer, {
      new: true
    });
    res.status(200).json(playerUpdated);
  } catch (error) {
    console.log(error);
    return res.status(400).json('Error en la solicitud');
  }
};

//DELETE jugador
const deletePlayer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const playerDeleted = await Player.findByIdAndDelete(id);
    res.status(200).json({ mensaje: 'Jugador eliminado', playerDeleted });
  } catch (error) {
    console.log(error);
    return res.status(400).json('Error en la solicitud');
  }
};

module.exports = {
  getPlayers,
  getPlayersByPosition,
  postPlayer,
  putPlayer,
  deletePlayer
};
