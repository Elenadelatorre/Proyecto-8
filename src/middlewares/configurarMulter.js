const { configurarMulter } = require('./file');

// Para el modelo de usuarios
const uploadUsers = configurarMulter('users');

// Para el modelo de marcas
const uploadBrands = configurarMulter('brands');

// Para el modelo de jugadores
const uploadPlayers = configurarMulter('players');

module.exports = {
  uploadUsers,
  uploadBrands,
  uploadPlayers
};
