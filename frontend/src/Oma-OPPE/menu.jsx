import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';

const menuItems = [
  {
    id: 0,
    title: 'Mapat',
    class: 'menu-item menu-mapat'
  }, {
    id: 1,
    title: 'Kaikki materiaalit',
    class: 'menu-item menu-all-materials'
  }, {
    id: 2,
    title: 'Kurssit',
    class: 'menu-item menu-courses'
  }, {
    id: 3,
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
        {listMenuItems}
      </div>
    );
  }
}

export default Menu;