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
        <h3 className="home-link recent-groups-link">Viimeisimmät kurssit</h3>
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
        <button className="create-button">Luo uusi kurssi</button>
      </div>
    );
  }
}

export default RecentGroups;