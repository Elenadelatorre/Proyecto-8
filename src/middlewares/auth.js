const User = require('../api/models/user');
const { verifySign } = require('../utils/jwt');

//Usuario normal:
const isUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    const parsedToken = token.replace('Bearer ', '');
    const { id } = verifySign(parsedToken);

    const user = await User.findById(id);

    user.password = null;
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res.status(400).json('No estás autorizado');
  }
};

//Administrador:
const isAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    const parsedToken = token.replace('Bearer ', '');
    const { id } = verifySign(parsedToken);
    const user = await User.findById(id);

    //¿Es Administrador?
    if (user.rol === 'admin') {
      user.password = null;
      req.user = user;
      next();
    } else {
      return res.status(400).json('No eres Administrador');
    }
  } catch (error) {
    return res.status(400).json('No estás autorizado');
  }
};

module.exports = { isUser, isAdmin };
