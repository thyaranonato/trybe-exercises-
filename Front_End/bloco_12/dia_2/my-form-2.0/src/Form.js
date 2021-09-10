import React from 'react';
import DadosPessoais from './DadosPessoais'
import DadosProfissionais from './DadosProfissionais'

class Form extends React.Component {
  render() {
    const { sendForm, resetForm, handleChange, currentState, handleOnBlur } = this.props;

    return (
      <form>
        <DadosPessoais
          handleChange={ handleChange }
          handleOnBlur= { handleOnBlur }
          currentState= { currentState }
        /> 
        <br />
        <DadosProfissionais handleChange={ handleChange } />
        <br />
        <input
            type="button"
            onClick={ sendForm }
            value="Enviar"
        />
        <input
          type="reset"
          onClick={ resetForm }
          value="Limpar"
        />
      </form>
    );
  }
}

export default Form;
