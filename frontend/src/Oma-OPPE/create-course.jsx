import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Header from './header.jsx';
import Menu from './menu.jsx';

class CreateCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      username: ''
    };
    
    this.toggleHidden = this.toggleHidden.bind(this);
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  
  render() {
    
    return (
      <div className="selected-course">
        <Header />
        <Menu />
        <h3 className="home-link recent-groups-link">Kurssin nimi</h3>
        <div className="folder-selection">
          <div className="folder-option">Ensimmäinen kansio</div>
          <button className="create-button">Luo uusi kansio</button>
        </div>
        <div className="tasks-section">
          <p className="empty-error">Lisää materiaaleja tai tehtäviä klikkaamalla + -nappulaa</p>
        </div>
        
        {!this.state.isHidden && <CreateItems />}
        <button className="addItem" onClick={this.toggleHidden.bind(this)}>+</button>
        
        <NavLink to="/coursestats" exact className="statsButton"></NavLink>
        
        <NavLink to="/course-specific-users" exact className="membersButton"></NavLink>
        
      </div>
    );
  }
}


const CreateItems = () => {
  return (
    <div>
      <div className="side-menu">
        <NavLink to="/usersettings" exact className="side-menu-item">Luo uusi materiaali</NavLink>
        <NavLink to="/usersettings" exact className="side-menu-item">Luo uusi tehtävä</NavLink>
        <NavLink to="/usersettings" exact className="side-menu-item">Luo uusi mapa</NavLink>
      </div>
    </div>
  );
}

export default CreateCourse;