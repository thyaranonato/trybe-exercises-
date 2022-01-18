// Exercício 1: Crie um modelo Book e defina o método getAll para retornar a lista de todos os livros.
const connection = require('./connection');

// Exercício 3: Crie um método getByAuthorId no modelo Book , para retornar apenas livros associados com um determinado author_id . E altere o middleware da rota books criado no passo 2 para receber uma query string com a chave author_id , e retornar apenas os livros associados.
const getByAuthorId = async (authorId) => {
  const query = 'SELECT * FROM model_example.books WHERE author_id=?;'
  const [books] = await connection.execute(query, [authorId]);

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
};

const getAll = async () => {
  const [books] = await connection.execute('SELECT * from model_example.books;');

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
};

const getById = async (id) => {
  const query = 'SELECT * FROM model_example.books WHERE id=?;'
  const [books] = await connection.execute(query, [id]);
  
  if (books.length === 0) return null;
  
  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }))[0];
  };

module.exports = {
  getAll,
  getByAuthorId,
  getById,
}