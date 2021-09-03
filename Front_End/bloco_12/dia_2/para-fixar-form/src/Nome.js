import React from 'react';

class Nome extends React.Component{
  render() {
    const { value, handleChange } = this.props;

    let error = undefined
    if (value.length > 30) error = 'Nome muito extenso!'

    return (
      <label htmlFor="nome">
        Nome Completo:
        <input id="nome" name="nome" type="nome" onChange={handleChange} value={value}/>
        <span>{error ? error : ''}</span>
      </label>
    );
  }
}

export default Nome;
