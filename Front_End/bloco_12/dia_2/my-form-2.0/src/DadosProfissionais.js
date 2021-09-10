import React from 'react';

class DadosProfissionais extends React.Component {
  render() {
    const { handleChange } = this.props;
    return (
      <fieldset>
        <legend>Dados profissionais:</legend>
        <div>
          Resumo do currículo:
          <textarea
            name="resume"
            maxLength="1000"
            required
            onChange={handleChange}
          />
        </div>
        <div>
          Cargo:
            <input
              type="text"
              name="role"
              maxLength="40"
              required
              onChange={handleChange}
              onMouseEnter={() => {
                alert('Preencha com cuidado esta informação.');
              }}
            />
        </div>
        <div>
          Descrição do cargo:
          <textarea
            name="roleDescription"
            maxLength="500"
            onChange={handleChange}
          />
        </div>
      </fieldset>
    );
  }
}

export default DadosProfissionais;
