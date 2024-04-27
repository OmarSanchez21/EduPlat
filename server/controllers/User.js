const { json } = require("express");
const User = require("../models/User");

const createUser = async (req,res) => {
    try {
        const newUser =  new User(req.body);
        const user = await newUser.save();
        res.status(201).json(user);
    } catch (error) {
        console.error('Error creando el usuario: ', error);
        res.status(500).json({ error: 'Internal Server'});
    }
};

const getallUsers = async (req,res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ mensaje: `Internal Server error : ${error}`});
    }
}


module.exports = {createUser, getallUsers};