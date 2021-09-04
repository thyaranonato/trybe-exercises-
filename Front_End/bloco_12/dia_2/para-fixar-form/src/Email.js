import React from 'react';

class Email extends React.Component{
  render() {
    const { value, handleChange } = this.props;

    let error = undefined
    if (value !== 'trybe@trybe.com') error = 'Email incorreto!'

    return (
      <label htmlFor="email">
        Email:
        <input 
          id="email" name="email" type="email" onChange={handleChange} value={value}
        />
        <span>{error ? error : ''}</span>
      </label>

    );
  }
}

export default Email;
