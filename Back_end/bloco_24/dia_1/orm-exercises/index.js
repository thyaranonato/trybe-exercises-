const express = require('express');
const bodyParser = require('body-parser');

const BooksController = require('./controllers/BooksController');

const app = express();
 app.use(bodyParser.json());

app.get('/books', BooksController.getAll);

 const PORT = 3000;
 app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
