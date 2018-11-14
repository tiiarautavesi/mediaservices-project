import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';


class CreateMaterial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }

  render() {
    
    return (
      <div className="create-material">
        <h1 className="create-materials-link">Luo uusi koulutus</h1>
        <form>
          <select className="custom-select">
            <option>Valitse oppiaine</option>
            <option>Matematiikka</option>
            <option>Äidinkieli</option>
            <option>Musiikki</option>
            <option>Yhteiskunta</option>
          </select>
          <select className="custom-select">
            <option>Valitse luokka-aste</option>
            <option>1lk</option>
            <option>2lk</option>
            <option>3lk</option>
            <option>4lk</option>
            <option>5lk</option>
            <option>6lk</option>
          </select>
          <input className="custom-select" value="Avainsanat" />
          <select className="custom-select">
            <option>Teema</option>
            <option>Teollisen tyylikäs</option>
            <option>Amazon</option>
            <option>Pinterest</option>
            <option>Taika</option>
          </select>
          <input className="create-button" type="submit" value="Luo" />
        </form>
      </div>
    );
  }
}

export default CreateMaterial;