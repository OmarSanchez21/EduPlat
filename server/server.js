// Importar las dependencias necesarias
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/User'); // Importar las rutas relacionadas con los usuarios

// Crear una instancia de la aplicación Express
const app = express();

// Configurar middleware para procesar el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Configurar las rutas de la aplicación
app.use('/users', userRoutes);

//el home de express
app.get('/',(req,res) => {
    res.send("Hola desde express")
})
// Configurar la conexión a la base de datos MongoDB Atlas
const mongoURI = 'mongodb+srv://rooter:uxncSfbKzmPn9s58@bdsocialnex.uagax6k.mongodb.net/<databaseName>?retryWrites=true&w=majority&appName=BDSocialNex';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });

// Configurar el puerto en el que la aplicación escuchará las solicitudes
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log('\x1b[36m',`http://localhost:${PORT}`);
});
