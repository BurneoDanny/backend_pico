const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());

// Ruta a la carpeta de modelos
const modelsPath = path.join(__dirname, 'models');

// Configurar Express para servir archivos estáticos desde la carpeta de modelos
app.use('/models', express.static(modelsPath));

// Ruta básica de ejemplo
app.get('/', (req, res) => {
    res.send('¡Bienvenido a mi API!');
});

// Otras configuraciones y rutas de tu aplicación Express...

// Puerto en el que escucha el servidor
const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
