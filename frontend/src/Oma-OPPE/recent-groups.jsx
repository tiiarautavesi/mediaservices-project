import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';


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
          <p className="recent-group-name">Course Name 1</p>
        </div>
        <div className="recent-group-link">
          <p className="recent-group-name">Course Name 2</p>
        </div>
        <div className="recent-group-link">
          <p className="recent-group-name">Course Name 3</p>
        </div>
        <br />
        <button className="create-button">Näytä kaikki</button>
      </div>
    );
  }
}

export default RecentGroups;