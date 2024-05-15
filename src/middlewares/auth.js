const User = require('../api/models/user');
const { verifySign } = require('../utils/jwt');

//Autenticación de usuarios:
const authenticateUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(400).json('No estás autorizado');
    }

    const parsedToken = token.replace('Bearer ', '');
    const { id } = verifySign(parsedToken);
    const user = await User.findById(id);

    if (!user) {
      return res.status(400).json('Usuario no encontrado');
    }

    req.user = user;

    next();
  } catch (error) {
    console.log(error);
    return res.status(400).json('No estás autorizado');
  }
};

//Usuario normal:
const isUser = async (req, res, next) => {
  await authenticateUser(req, res, async () => {
    try {
    
      if (req.user.rol === 'user') {
        return next();
      } else {
        return res.status(400).json('No eres un usuario normal');
      }
    } catch (error) {
      console.log(error);
      return res.status(400).json('Error de autenticación');
    }
  });
};

//Administrador:
const isAdmin = async (req, res, next) => {
  await authenticateUser(req, res, async () => {
    try {
      
      if (req.user.rol === 'admin') {
        return next();
      } else {
        return res.status(400).json('No eres Administrador');
      }
    } catch (error) {
      console.log(error);
      return res.status(400).json('Error de autenticación');
    }
  });
};

module.exports = { isUser, isAdmin };