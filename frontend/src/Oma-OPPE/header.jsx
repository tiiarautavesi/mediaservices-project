import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';


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
          <h2 className="user-name">Tanja Testinen</h2>
        </header>
        
      </div>
    );
  }
}

export default Header;