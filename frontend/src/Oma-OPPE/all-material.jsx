import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';


class AllMaterial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }

  render() {
    
    return (
      <div className="home-section all-materials">
        <h3 className="home-link all-materials-link" onChange={this.handleChange}>Kaikki materiaalit</h3>
        <div className="all-material-thumbnail thumbnail">
          <p className="all-material-name">Kansio 1</p>
        </div>
        <div className="all-material-thumbnail thumbnail">
          <p className="all-material-name">Kansio 2</p>
        </div>
        <div className="all-material-thumbnail thumbnail">
          <p className="all-material-name">Kansio 3</p>
        </div>
      </div>
    );
  }
}

export default AllMaterial;