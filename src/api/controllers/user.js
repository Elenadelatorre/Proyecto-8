const { generateSign } = require('../../config/jwt');
const { deleteFile } = require('../../utils/deleteFile');
const User = require('../models/user');
const bcrypt = require('bcrypt');

// GET todos los usuarios:
const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(400).json('Error en la petición');
  }
};

// POST - register
const register = async (req, res, next) => {
  try {
    const newUser = new User({
      userName: req.body.userName,
      password: req.body.password,
      img: req.body.img,
      rol: 'user'
    });

    const duplicateUser = await User.findOne({ userName: req.body.userName });

    if (duplicateUser) {
      return res.status(400).json('El usuario ya existe');
    }

    if (req.file) {
      newUser.img = req.file.path;
    }
    const userSaved = await newUser.save();
    return res.status(201).json(userSaved);
  } catch (error) {
    console.log(error);
    return res.status(400).json('Error en la petición');
  }
};

//POST Login
const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ userName: req.body.userName });

    if (!user) {
      return res.status(400).json('El usuario no existe');
    }

    if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = generateSign(user._id);
      return res.status(200).json({ user, token });
    } else {
      return res.status(400).json('El usuario o la contraseña son incorrectos');
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json('Error al iniciar sesión');
  }
};

// PUT user
const putUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newUser = new User(req.body);
    newUser._id = id;
    const userUpdated = await User.findByIdAndUpdate(id, newUser, {
      new: true
    });
    return res.status(200).json(userUpdated);
  } catch (error) {
    return res.status(400).json('Error en la solicitud');
  }
};
// DELETE user
const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userDeleted = await User.findByIdAndDelete(id);
    deleteFile(userDeleted.img);
    return res.status(200).json({
      mensaje: 'Este usuario ha sido eliminado',
      userDeleted
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = { getUsers, register, login, putUser, deleteUser };
