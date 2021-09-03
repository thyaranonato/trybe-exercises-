import React from 'react';

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
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
              <label>
                Email:
                <input 
                  id="email" name="email" type="email" onChange={this.handleChange} value={this.state.email}
                />
              </label>
          </fieldset>

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
