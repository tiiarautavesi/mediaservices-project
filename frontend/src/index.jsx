import React from 'react';
import ReactDOM from 'react-dom';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.username + '. A password was submitted: ' + this.state.password);
    event.preventDefault();
  }

  render() {
    
    return (
      <div className="login-form">
        <img className="login-logo" src='img/blinking-logo.gif' />
        <h1>Kirjaudu sisään</h1>
        <form className="login-info" onSubmit={this.handleSubmit}>
          <input name="username" className="login-input" type="text" value={this.state.username} onChange={this.handleChange} />
          <input name="password" className="login-input" type="password" value={this.state.password} onChange={this.handleChange} />
          <input className="login-button" type="submit" value="Kirjaudu" />
        </form>
        <a className="login-issue">Minulla ei vielä ole tunnuksia OPPE:en</a>
        <div className="new-user-info">
          <div className="close">x</div>
          Ihanaa, että olet kiinnostunut OPPE:sta! Ota yhteyttä oppilaitoksesi tietohallintoon, tai tilaa henkilökohtainen demo
          <a target="_blank" href=""> tästä</a>.
        </div>
        <footer>&#169; 2018 Tiia Rautavesi</footer>
      </div>
    );
  }
}

ReactDOM.render(
  <Login />,
  document.getElementById('app')
);
