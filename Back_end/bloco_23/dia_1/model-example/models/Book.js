// Exercício 1: Crie um modelo Book e defina o método getAll para retornar a lista de todos os livros.
const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute('SELECT * from model_example.books;');

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
};

module.exports = {
  getAll,
}