import React from 'react';

class Email extends React.Component{
  render() {
    const { value, handleChange } = this.props;
    return (
      <label>
        Email:
        <input 
          name="email" type="email" onChange={handleChange} value={value}
        />
      </label>

    );
  }
}

export default Email;
