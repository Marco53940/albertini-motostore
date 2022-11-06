const bcrypt = require("bcrypt");
const users = require("../services/user");
const { validationResult } = require("express-validator");

const login = (req, res) => {
  const { usernameOrEmail, password } = req.body;

  const user = users
    .readUsers()
    .filter(
      (u) => u.email === usernameOrEmail || u.username === usernameOrEmail
    );

  if (user.length == 0) {
    return res.send("Usuario incorrecto");
  }

  const userData = user[0];

  const isValidPassword = bcrypt.compareSync(password, userData.password);

  if (!isValidPassword) {
    return res.send("Contraseña incorrecta");
  }

  delete userData.password;

  req.session.userData = userData;

  return res.redirect("/home");
};

const register = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return res.render('Register', {
      errores: errors.errors
    });
  }

  const { name, lastname, email, birthday, password, username } = req.body;

  const user = users
    .readUsers()
    .filter((u) => u.email === email || u.username === username);

  if (user.length > 0) {
    return res.send("Usuario ya creado");
  }

  const User = {
    name: name,
    lastname: lastname,
    email: email,
    birthday: birthday,
    username: username,
    password: bcrypt.hashSync(password, 10),
  };

  users.createUser(User);
  next();
};

const logout = (req, res) => {
  req.session.destroy();

  return res.redirect("/login");
};

module.exports = {
  login,
  logout,
  register,
};
