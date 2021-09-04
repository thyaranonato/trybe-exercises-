// requisito feito com auxílio do gabarito do course

import React from 'react';
import Form from './Form';
import FormError from './FormError';
import FormDataDisplay from './FormDataDisplay';

const estado_inicial = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: '',
  addressType: '',
  resume: '',
  role: '',
  roleDescription: '',
  formError: {},
  submitted: false,
}

class App extends React.Component {
  constructor() {
    super();
    this.state = estado_inicial;
  }

  handleChange = event => {
    let { name, value } = event.target;

    if (name === 'name') value = value.toUpperCase();
    if (name === 'address') value = this.validateAddress(value);

    this.updateState(name, value);
  }

  handleOnBlur = event => {
    let { name, value } = event.target;

    if (name === 'city') value = value.match(/^\d/) ? '' : value;

    this.updateState(name, value);
  }

  updateState(name, value) {
    this.setState((state) => ({
      [name]: value,
      formError: {
        ...state.formError,
        [name]: this.validateField(name, value)
      }
    }));
  }

  validateAddress = address => address.replace(/[^\w\s]/gi, '')

  handleSubmit = event => {
    event.preventDefault();
  }

  validateField(fieldName, value) {
    switch (fieldName) {
      case 'email':
        const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2})$/i)
        return isValid ? '' : ' is invalid';
      default:
        break;
    }
    return '';
  }

  resetForm = () => { this.setState(estado_inicial) };

  sendForm = () => { this.setState({ submitted: true }) };

  render() {
    const { submitted } = this.state;

    return (
      <main>
        <h1>Preencha o Formulário</h1>
        <Form
          sendForm={this.sendForm}
          resetForm={this.resetForm}
          handleChange={this.handleChange}
          currentState={ this.state }
          handleOnBlur={ this.handleOnBlur }
        />
        <div>
          <FormError formError={this.state.formError} />
        </div>
        { submitted && <FormDataDisplay currentState={ this.state } /> }
      </main>
    );
  }
}

export default App;
