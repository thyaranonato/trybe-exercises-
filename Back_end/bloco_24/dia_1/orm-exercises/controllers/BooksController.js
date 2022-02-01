const { Book } = require('../models');

const getAll = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json(books);
  }
  catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  getAll,
};
