import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Header from './header.jsx';
import Menu from './menu.jsx';


class SelectedCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }

  render() {
    
    return (
      <div className="selected-course">
        <Header />
        <Menu />
        <h3 className="home-link recent-groups-link">Kurssin nimi</h3>
        <div className="folder-selection">
          <div className="visible folder-option">Kansion nimi</div>
          <div className="visible folder-option selected">Kansion nimi</div>
          <div className="visible folder-option">Kansion nimi</div>
          <div className="folder-option">Kansion nimi</div>
          <div className="folder-option">Kansion nimi</div>
          <button className="create-button">Luo uusi kansio</button>
        </div>
        <div className="tasks-section">
          <div className="visible material-item">
            Materiaali
          </div>
          <div className="visible task-item">
            Tehtävä
            <div className="taskInfo">
              <p className="time">20.11.</p>
              <p className="returns">14/29</p>
            </div>
          </div>
          <div className="visible task-item">
            Tehtävä
            <div className="taskInfo">
              <p className="time">20.11.</p>
              <p className="returns">3/29</p>
            </div>
          </div>
          <div className="visible material-item">
            Materiaali
          </div>
          <div className="visible material-item">
            Materiaali
          </div>
          <div className="visible task-item">
            Tehtävä
            <div className="taskInfo late-task">
              <p className="time">4.11.</p>
              <p className="returns">24/29</p>
            </div>
          </div>
        </div>
        <button className="addItem">+</button>
        <NavLink to="/coursestats" exact className="statsButton"></NavLink>
      </div>
    );
  }
}

export default SelectedCourse;