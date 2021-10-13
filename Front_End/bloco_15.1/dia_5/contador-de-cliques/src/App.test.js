import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from './App';
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    // Caso seja interessante alterar o valor inicial do clickReducer , isso também é possível passando como segundo parâmetro para a função renderWithRedux um objeto com as propriedades que respeitem o formato original do state . Isto é:
    // const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });
  
  test('a click in a button should increment the value of clicks', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});

    expect(queryByText('5')).toBeInTheDocument();
  });
  
  // Para fixar: Crie um teste com o valor padrão do reducer e teste se um clique funciona.
  test('se um clique funciona', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');

    expect(queryByText('0')).toBeInTheDocument();
    expect(buttonAdicionar).toBeInTheDocument();
    fireEvent.click(buttonAdicionar);
  });

  // Para fixar: Altere o valor inicial do counter para 10, faça um clique do botão e crie os testes para esses comportamentos.
  test('valor inicial counter=10, testar clique', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 }}});
    const buttonAdicionar = queryByText('Clique aqui');

    expect(queryByText('10')).toBeInTheDocument();
    expect(buttonAdicionar).toBeInTheDocument();
    fireEvent.click(buttonAdicionar);
    expect(queryByText('11')).toBeInTheDocument();
  });
});
