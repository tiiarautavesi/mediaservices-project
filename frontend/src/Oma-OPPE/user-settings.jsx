import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Header from './header.jsx';

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

class UserSettings extends React.Component {
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
      <div className="settings-page">
        <Header />
        <img className="settings-logo" src='img/blinking-logo.gif' />
        <h2 className="settings-title">Omat asetuksesi</h2>
        <h3 className="home-link recent-groups-link"></h3>
        <div className="folder-selection">
          <div className="setting-option selected">Vaihda salasana</div>
          <div className="setting-option">Opetus asteen asetukset</div>
          <div className="setting-option">Omat ryhmät</div>
          <div className="setting-option">Laskutustiedot</div>
          <div className="setting-option">Kansion nimi</div>
        </div>
        <div className="setting-section">
          <h3>Vaihda salasanasi.</h3>
          <p>Valitse salasana, joka sisältää ainankin yhden kirjaimen, numeron sekä erikoismerkin. Salasanan on oltava 8 merkkiä pitkä.</p>
          <form className="login-info" onSubmit={this.handleSubmit}>
            <label>Vanha salasana</label>
            <input name="password" className="settings-input" type="password" value={this.state.password} onChange={this.handleChange} />
            <label>Uusi salasana</label>
            <input name="password" className="settings-input" type="password" value={this.state.password} onChange={this.handleChange} />
            <label>Uusi salasana uudestaan</label>
            <input name="password" className="settings-input" type="password" value={this.state.password} onChange={this.handleChange} />

            <button className="change-password-button">Vaihda salasana</button>
          </form>
        </div>
        <button className="addItem">+</button>
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

export default UserSettings;