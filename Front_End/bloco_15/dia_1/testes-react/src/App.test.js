import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';


describe('Verifica todos os campos do input Email', () => {
  // it('renders learn react link', () => {
  //   const { getByText } = render(<App />);
  //   const linkElement = getByText(/learn react/i);
  //   expect(linkElement).toBeInTheDocument();
  // });

  it('Verificando se existe o campo Email.', () => {
    const { getByLabelText } = render(<App />);
    const inputEmail = getByLabelText('Email');
    expect(inputEmail).toBeInTheDocument();
      expect(inputEmail.type).toBe('email');
    });
    
    // it('Verificando se existe um botão', () => {
    //   const { getByRole } = render(<App />);
    //   const btn = getByRole('button');
    //   expect(btn).toBeInTheDocument();
    // });
    
    it('Verificando se existe um botão de enviar', () => {
      const { getByTestId } = render(<App />);
      const btn = getByTestId('id-send');
      expect(btn).toBeInTheDocument();
      expect(btn.type).toBe('button');
      expect(btn).toHaveValue('Enviar');
    });
    
    it('Verificando se existe dois botões', () => {
      const { getAllByRole } = render(<App />);
      const buttons = getAllByRole('button');
      expect(buttons.length).toBe(2);
    });
    
    it('Verificando se o botão e o campo email estão funcionando.', () => {
      const { getByTestId, getByLabelText } = render(<App />);
    
      const EMAIL_USER = 'email@email.com';
    
      const textEmail = getByTestId('id-email-user');
      expect(textEmail).toBeInTheDocument();
      expect(textEmail).toHaveTextContent('Valor:');
    
      const btnSend = getByTestId('id-send');
      const inputEmail = getByLabelText('Email');
      fireEvent.change(inputEmail, { target: { value: EMAIL_USER } });
      fireEvent.click(btnSend);
      expect(inputEmail).toHaveValue('');
      expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
    });  
})
