import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';
import { Link, NavLink } from 'react-router-dom';


class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    
    return (
      <div className="menu">
        <div className="menu-item menu-mapat">
          <p>
            <NavLink to="/mapat" exact className="menu-title">Mapat</NavLink>
          </p>
        </div>
        <div className="menu-item menu-all-materials">
          <p>
            <NavLink to="/all-material" exact className="menu-title">Kaikki materiaalit</NavLink>
          </p>
        </div>
        <div className="menu-item menu-courses">
          <p>
            <NavLink to="/all-courses" exact className="menu-title">Kurssit</NavLink>
          </p>
        </div>
  
      </div>
    );
  }
}

export default Menu;