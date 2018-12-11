import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';
import { Link, NavLink } from 'react-router-dom';


class RecentGroups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }

  render() {
    
    return (
      <div className="home-section recent-groups">
        
        <NavLink to="/all-courses" exact>
          <h3 className="home-link all-materials-link">Kurssit</h3>
        </NavLink>
        
        <div className="recent-group-link">
          <NavLink to="/course" exact className="recent-group-name">Course Name 1</NavLink>
        </div>
        <div className="recent-group-link">
          <NavLink to="/course" exact className="recent-group-name">Course Name 2</NavLink>
        </div>
        <div className="recent-group-link">
          <NavLink to="/course" exact className="recent-group-name">Course Name 3</NavLink>
        </div>
        <br />
        
        <NavLink to="/create-course" exact>
          <button className="create-button">Luo uusi kurssi</button>
        </NavLink>
        
      </div>
    );
  }
}

export default RecentGroups;