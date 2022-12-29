const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const userDb = require('../../models').User;

const login = async (req, res) => {
  const { usernameOrEmail, password } = req.body;
  let user;
  try{
    const users = await userDb.findAll();
    console.log(users);
    user = users.filter(data => data.username === usernameOrEmail || data.email === usernameOrEmail )
    if(user.length){      
      const userData = user[0];
      const isValidPassword = bcrypt.compareSync(password, userData.password);

  if (!isValidPassword) {
    return res.send("Contraseña incorrecta");
  }

  delete userData.password;

  req.session.userData = userData;

  return res.redirect("/home");
    }
    else {
      return res.render('Errors', {error : "Usuario incorrecto"});
    }
  }
  catch (error){
    console.log(error);
  }

  
};


const login_user = async (req, res) => {
  const { usernameOrEmail, password } = req.body;
  let user;
  try{
    const users = await userDb.findAll();
    console.log(users);
    user = users.filter(data => data.username === usernameOrEmail || data.email === usernameOrEmail )
    if(user.length){      
      const userData = user[0];
      const isValidPassword = bcrypt.compareSync(password, userData.password);

  if (!isValidPassword) {
    return res.status(401).send({"msg" : "Contraseña incorrecta"});
  }

  delete userData.password;

  req.session.userData = userData;

  return res.status(200).send(userData);
    }
    else {
      return res.status(401).send({"msg" : "Usuario incorrecto" });
    }
  }
  catch (error){
    console.log(error);
  }

  
};



const register = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return res.render('Register', {
      error: errors.errors
    });
  }

  const { name, lastname, email, birthday, password, username } = req.body;

  try{
      const users = await userDb.findAll();
      console.log(users);
      if(users){
        const result = users.filter(data => data.username === username || data.email === email )
        if (result.length > 0) {
          return res.render('Errors', {error : "Usuario ya existente"});
        }
      }

      const User = {
        name: name,
        lastname: lastname,
        email: email,
        birthday: birthday,
        username: username,
        password: bcrypt.hashSync(password, 10),
      };
    
      await userDb.create(User);
    }
    catch (error){
      console.log(error);
      return res.render('Register', {
        error: error
      });
    }




  next();
};

const logout = (req, res) => {
  req.session.destroy();

  return res.redirect("/login");
};

const find = (req, res) => {
  return userDb.findOne({
    where: {
      id: req.params.id
    }
  }).then(user => res.status(200).send(user))
  .catch(error => res.status(400).send(error));
}

module.exports = {
  login,
  login_user,
  logout,
  register,
  find
};
