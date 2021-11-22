const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const router = require('./router/index');

app.set('view engine', 'ejs');
app.set('views', 'src/views');

// routes
app.use('/', router)

app.listen(PORT, () => console.log(`Servidor iniciado en el puerto ${PORT}`));

