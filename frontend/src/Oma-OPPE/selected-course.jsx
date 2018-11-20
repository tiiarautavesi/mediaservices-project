import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';


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
            <div className="taskInfo late">
              <p className="time">4.11.</p>
              <p className="returns">24/29</p>
            </div>
          </div>
        </div>
        <button className="addItem">+</button>
        <button className="statsButton"></button>
      </div>
    );
  }
}

export default SelectedCourse;