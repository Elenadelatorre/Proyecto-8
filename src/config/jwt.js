const jwt= require('jsonwebtoken');

//Crear llave:
const generateSign = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET, {
     expiresIn: "30d"
  });
};

//Verificar llave:
const verifySign = (token) => {
  return jwt.sign(token, process.env.JWT_SECRET);
};

module.exports = {generateSign, verifySign}
