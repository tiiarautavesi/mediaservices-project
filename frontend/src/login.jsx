import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';

const loginCredentials = [
  {
    uid: 1,
    username: "opettaja",
    password: "1234"
  }, {
    uid: 2,
    username: "oppilas",
    password: "1234"
  }
];

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      show: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  
  showModal(event) {
    this.setState({ 
      show: true 
    });
  }
  
  hideModal(event) {
    this.setState({ 
      show: false 
    });
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
          
          <NavLink to="/home" exact  className="login-button">Kirjaudu</NavLink>
        </form>
        <a className="login-issue" onClick={this.showModal}>
          Unohditko salasanasi?
        </a>
        <a className="login-issue" onClick={this.showModal}>
          Minulla ei vielä ole tunnuksia OPPE:en
        </a>
        <NewUserInfo show={this.state.show} handleClose={this.hideModal} />
        {console.log(this.state.show)}
        
      </div>
    )
  }
}

const NewUserInfo = ({handleClose, show}) => {
  const showHideClassName = show ? 'new-user-info display-block' : 'new-user-info display-none';
  return (
    <div>
      <div className={showHideClassName}>
        <div className="close" onClick={handleClose}>x</div>
        Ihanaa, että olet kiinnostunut OPPE:sta! Ota yhteyttä oppilaitoksesi tietohallintoon, tai tilaa henkilökohtainen demo
        <a target="_blank" href=""> tästä</a>.
      </div>
    </div>
  );
}

const ForgottenPassword = ({handleClose, show}) => {
  const showHideClassName = show ? 'new-user-info display-block' : 'new-user-info display-none';
  return (
    <div>
      <div className={showHideClassName}>
        <div className="close" onClick={handleClose}>x</div>
        Kirjoita sähköposti osoitteesi alla olevaan kenttään ja lähetämme sinulle uuden salasanan
        <input></input>
        <a target="_blank" href=""> tästä</a>.
      </div>
    </div>
  );
}

export default Login;