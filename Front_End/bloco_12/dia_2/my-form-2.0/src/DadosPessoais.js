import React from 'react';

const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 
'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 
'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí',
'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina',
'São Paulo', 'Sergipe', 'Tocantins'];

class DadosPessoais extends React.Component {
  render() {
    const { handleChange, handleOnBlur, currentState } = this.props;
    return (
      <fieldset>
            <legend>Dados pessoais:</legend>
            <div>
              Nome:
              <input
                type="name"
                name="name"
                maxLength="40"
                required
                onChange={handleChange}
              />
            </div>
            <div>
              Email:
              <input
                type="email"
                name="email"
                maxLength="50"
                required
                onChange={handleChange}
              />
            </div>
            <div>
              CPF:
              <input
                type="text"
                name="cpf"
                maxLength="11"
                required
                onChange={handleChange}
              />
            </div>
            <div>
              Endereço:
              <input
                type="text"
                name="address"
                maxLength="200"
                required
                onChange={handleChange}
              />
            </div>
            <div>
              Cidade:
              <input
                type="text"
                name="city"
                maxLength="28"
                required
                value={currentState.city}
                onBlur={handleOnBlur}
                onChange={handleChange}
              />
            </div>
            <div>
              Estado:
              <select
                name="countryState"
                required
                onChange={handleChange}
                defaultValue=""
              >
                <option value="">Selecione</option>
                {
                  states.map((value, key) => (
                    <option key={ key }>{ value }</option>
                  ))
                }
              </select>
            </div>
            <div>
              <label htmlFor="house">
                <input
                  type="radio"
                  id="house"
                  name="addressType"
                  value="house"
                  onChange={handleChange}
                />
                Casa
              </label>
              <label htmlFor="apart">
                <input
                  type="radio"
                  id="apart"
                  name="addressType"
                  value="apartment"
                  onChange={handleChange}
                />
                Apartamento
              </label>
            </div>
          </fieldset>
    );
  }
}

export default DadosPessoais;
