import React from 'react';
import Loading from './components/Loading';
import PersonInfos from './components/PersonInfos';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      person: [],
    }
  }
  // Requisição API e mudança setState
  componentDidMount() {
    const url = ' https://api.randomuser.me/';
    fetch(url).then((response) => response.json())
    .then((data) => {
      this.setState({
        person: data.results,
        loading: false,
      });
    })
  }
  // Verifica se pessoa renderizada tem mais de 50 anos
  shouldComponentUpdate(nextProps, nextState) {
    const AGE = 50;
    if(nextState.person[0].dob.age > AGE) {
      return false;
    }
    return true;
  }
  // função para 'pegar' os dados que precisamos
  getUserInfos = (user) => {
    return {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      age: user.dob.age,
      image: user.picture.thumbnail,
    }
  }

  render() {
    const { person, loading } = this.state;
    if (loading) return <Loading />;
    return (
      <div>
        {person.map((currentPerson, index) => (
          <PersonInfos key={ index } person={ this.getUserInfos(currentPerson) } />
        ))}
      </div>
    );
  }
}

export default App;
