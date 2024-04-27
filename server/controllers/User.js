const User = require("../models/User");

const createUser = async (req,res) => {
    try {
        const newUser =  new User(req.body);
        const user = newUser.save();
        res.status(201).json(user);
    } catch (error) {
        console.error('Error creando el usuario: ', error);
        res.status(500).json({ error: 'Internal Server'});
    }
};


module.exports = {createUser};