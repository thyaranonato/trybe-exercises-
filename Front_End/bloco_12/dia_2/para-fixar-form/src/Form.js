import React from 'react';
import Nome from './Nome';
import Email from './Email';

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      nome: '',
      email: '',
      textarea: '',
      checkbox: false,
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <form>
          <fieldset>
            <legend>Informações pessoais:</legend>
              <Nome value={this.state.nome} handleChange={this.handleChange} />
              <Email value={this.state.email} handleChange={this.handleChange} />
          </fieldset>
          <br />
          <fieldset>
            <legend>Textos e arquivos:</legend>
              <label>
              Escreva seu texto aqui:
                <textarea name="textarea" id="textarea" onChange={this.handleChange} value={this.state.textarea} />
              </label>

              <label>
                <input type="checkbox" name="checkbox" onChange={this.handleChange} value={this.state.checkbox}/>
              </label>

              <label>
                <input type="file" />
              </label>
          </fieldset>

        </form>
      </div>
    );
  }
}

export default Form;
