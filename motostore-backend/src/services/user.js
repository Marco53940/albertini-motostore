const fs = require('fs');
const path = require('path');

const readUsers = () => {

    const Users = fs.readFileSync(path.resolve(__dirname,"../database/users.json"));

    console.log('Usuarios leidos con exito');

    return JSON.parse(Users);

}

const readUser = (id) => {

    const Users = readUsers();

    const User = Users.filter((p) => p.id == id);

    return User;

}

const createUser = (User) => {

    const Users = readUsers();

    const lastUserId = Users[Users.length - 1].id;

    Users.push({
        id: lastUserId + 1,
        ...User
    });

    fs.writeFileSync(path.resolve(__dirname,"../database/users.json"), JSON.stringify(Users));
    console.log('User creado con exito');

}

const deleteUser = (id) => {

    const Users = readUsers();

    const newUser = Users.filter(p => p.id != id);

    fs.writeFileSync(path.resolve(__dirname,"../database/users.json"), JSON.stringify(newUser));

}

const UserExists = (id) => {

    const Users = readUsers();

    const User = Users.filter(p => p.id == id);

    if (User.length == 0) {
        return false;
    }

    return true;

}

module.exports = {
    readUsers,
    readUser,
    createUser,
    deleteUser,
    UserExists
}