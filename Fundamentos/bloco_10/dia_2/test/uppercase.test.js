const uppercase = require('../../dia_2/src/uppercase');

test('uppercase "teste" é igual a "TESTE"', (done) => {
  uppercase('teste', (str) => {
    try {
      expect(str).toBe('TESTE');
      done();
    } catch (error) {
      done(error);
    }
  });
});
