import React from 'react';

class Nome extends React.Component{
  render() {
    const { value, handleChange } = this.props;
    return (
      <label>
        Nome Completo:
        <input name="nome" type="nome" onChange={handleChange} value={value}/>
      </label>
    );
  }
}

export default Nome;
