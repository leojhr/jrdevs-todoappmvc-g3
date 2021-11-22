const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', 'src/views');

// Entrada de prueba
app.get('/', (req, res) => res.render('home'));

app.listen(PORT, () => console.log(`Servidor iniciado en el puerto ${PORT}`));

