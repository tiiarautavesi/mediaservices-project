import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';
import { Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Header from './header.jsx';
import Menu from './menu.jsx';

const folderList = [
  {
    folderid: 1,
    name: 'Matematiikka',
    styleClass: 'all-materials-thumbnail red'
  }, {
    folderid: 2,
    name: 'Äidinkieli',
    styleClass: 'all-materials-thumbnail red'
  }, {
    folderid: 3,
    name: 'Ruotsi',
    styleClass: 'all-materials-thumbnail blue'
  }, {
    folderid: 4,
    name: 'Äidinkieli',
    styleClass: 'all-materials-thumbnail red'
  }, {
    folderid: 5,
    name: 'Ruotsi',
    styleClass: 'all-materials-thumbnail blue'
  }
]

const mapaList = [
  {
    mapaid: 111,
    name: 'Mapa name1'
  }, {
    mapaid: 112,
    name: 'Mapa name2'
  }, {
    mapaid: 113,
    name: 'Mapa name3'
  }, {
    mapaid: 114,
    name: 'Mapa name4'
  }, {
    mapaid: 115,
    name: 'Mapa name5'
  }, {
    mapaid: 116,
    name: 'Mapa name6'
  }, {
    mapaid: 117,
    name: 'Mapa name7'
  }
]

class AllMaterialsFull extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      searchWord: ''
    };

    this.toggleHidden = this.toggleHidden.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  handleChange(event) {
    const value = event.target.value;
    
    this.setState({
      searchWord: value
    });
  }

  render() {
    
    const listFiles = folderList.map(name => {
      return (
        <div className={name.styleClass} key={name.folderid}>
          <p>{name.name}</p>
        </div>
      )
    });
    
    const listMapas = mapaList.map(name => {
      return (
        <div className='mapa-thumbnail' key={name.mapaid}>
          <p>{name.name}</p>
        </div>
      )
    });
    
    return (
      <div className="all-materials-full">
        <Header />
        <Menu />
        <input className="search" onChange={this.handleChange}></input>
        <div className="all-materials-container">
          <h2 className="materials-title">Kaikki materiaalit</h2>
          
          <div className="material-selection">
            {listFiles}
            {listMapas}
          </div>
          {!this.state.isHidden && <CreateItems />}
          <button className="addItem" onClick={this.toggleHidden.bind(this)}>+</button>
          
        </div>
      </div>
    );
  }
}

const CreateItems = () => {
  return (
    <div>
      <div className="side-menu">
        <NavLink to="/usersettings" exact className="side-menu-item">Luo uusi kansio</NavLink>
        <NavLink to="/usersettings" exact className="side-menu-item">Luo uusi materiaali</NavLink>
        <NavLink to="/usersettings" exact className="side-menu-item">Luo uusi mapa</NavLink>
      </div>
    </div>
  );
}

export default AllMaterialsFull;