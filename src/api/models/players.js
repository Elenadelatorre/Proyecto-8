const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  team: {
    type: String,
    required: true,
  },
  position: {
    type: String,enum: ["portero", "defensa", "centrocampista", "delantero"],
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  valorMercado: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
},
{
  timestamps: true,
  collection: "players"
});

const Player = mongoose.model("players", playerSchema, "players");

module.exports = Player;