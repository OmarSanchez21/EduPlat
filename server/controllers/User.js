const { json } = require("express");
const User = require("../models/User");

const createUser = async (req,res) => {
    try {
        //Buscar si existe uno
        const exitsUser = await User.findOne({
            $or: [{username: req.body.userID}, {email: req.body.email}]
        });
        
        if(exitsUser){
            return res.status(400).json({
                exito: false,
                mensaje: `Ya hay un usuario con este correo ${req.body.email} o este usuario ${req.body.userID}`,
                data: {}
            });
        }


        const newUser =  new User(req.body);
        const user = await newUser.save();
        res.status(201).json({
            exito: true,
            mensaje: 'Se ha creado correctamente el usuario',
            data: {
                name: user.userInfo.name,
                lastname: user.userInfo.lastname,
                correo: user.email
            }
        });
    } catch (error) {
        console.error('Error creando el usuario: ', error);
        res.status(500).json({
            exito: false,
            mensaje: 'Error interno del servidor al intentar crear el usuario: ',
            data: {}
        });
    }
};

const getallUsers = async (req,res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            exito: true,
            mensaje: 'Todos los usuarios',
            data: users
        });
    } catch (error) {
        res.status(500).json({ mensaje: `Internal Server error : ${error}`});
    }
}


module.exports = {createUser, getallUsers};