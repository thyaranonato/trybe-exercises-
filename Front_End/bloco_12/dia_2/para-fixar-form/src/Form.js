import React from 'react';

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: '',
    }
  }

  handleChange(event) {
    this.setState({
      email: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <form>
          <span>Insira o seu email:</span>
          <label>
            <input 
              id="email" name="email" type="email" onChange={this.handleChange} value={this.state.email}
            />
          </label>
          <label>
            <textarea name="textarea" id="textarea" />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
