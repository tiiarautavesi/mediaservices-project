import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';


class RecentMaterial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }

  render() {
    
    return (
      <div className="home-section recent-materials">
        <h3 className="home-link recent-materials-link">Viimeisimmät mapat</h3>
        <div className="recent-material-thumbnail thumbnail">
          <p className="recent-material-name">Material's Name 1</p>
          <img className="recent-material-img" src='img/doge.jpg' />
        </div>
        <div className="recent-material-thumbnail thumbnail">
          <p className="recent-material-name">Material's Name 2</p>
          <img className="recent-material-img" src='img/meri.jpg' />
        </div>
        <div className="recent-material-thumbnail thumbnail">
          <p className="recent-material-name">Material's Name 3</p>
          <img className="recent-material-img" src='img/https.png' />
        </div>
        <button className="create-button">Luo uusi mapa</button>
      </div>
    );
  }
}

export default RecentMaterial;