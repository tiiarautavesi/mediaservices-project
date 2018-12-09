import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';
import { Link, NavLink } from 'react-router-dom';

const menuItems = [
  {
    id: 1,
    title: 'Kurssin nimi',
    class: 'menu-item menu-course-name'
  }
]

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    const listMenuItems = menuItems.map(title => {
      return (
        <div className={title.class} key={title.id}>
          <p className="menu-title">{title.title}</p>
        </div>
      )
    });
    
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
        {listMenuItems}
      </div>
    );
  }
}

export default Menu;