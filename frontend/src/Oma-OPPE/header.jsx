import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';
import { Link, NavLink } from 'react-router-dom';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }

  render() {
    
    return (
      <div className="header">
        <header>
          <img className="header-logo" src='img/funtasize-logo-sqr.png' />
          <h2 className="page-title">Oma OPPE</h2>
          <h2>
            <NavLink to="/userinfo" exact className="user-name">Tanja Testinen</NavLink>
          </h2>
        </header>
        
      </div>
    );
  }
}

export default Header;