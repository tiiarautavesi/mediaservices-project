import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';
import { Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Header from './header.jsx';
import Menu from './menu.jsx';

const courseList = [
  {
    courseid: 1,
    name: 'Geometria',
    styleClass: 'course-name',
    state: 'ended',
    users: [
      'Leo Tähti, ',
      'Jaana Saastamoinen, ',
      'Linnea Kuusisto, ',
      'Kaija Koponen, ',
      'Leena Manninen, ',
      'Kirsi Kataja, ',
      'Pekka Pouta, ',
      'Minna Maaritsainen, ',
      'Tanja Testinen'
    ]
  }, {
    courseid: 2,
    name: 'Äidinkieli',
    styleClass: 'course-name',
    state: 'current',
    users: [
      'Leo Tähti, ',
      'Jaana Saastamoinen, ',
      'Linnea Kuusisto, ',
      'Kaija Koponen, ',
      'Leena Manninen, ',
      'Kirsi Kataja, ',
      'Pekka Pouta, ',
      'Minna Maaritsainen, ',
      'Tanja Testinen'
    ]
  }, {
    courseid: 3,
    name: 'Ruotsi',
    styleClass: 'course-name',
    state: 'current',
    users: [
      'Leo Tähti, ',
      'Jaana Saastamoinen, ',
      'Linnea Kuusisto, ',
      'Kaija Koponen, ',
      'Leena Manninen, ',
      'Kirsi Kataja, ',
      'Pekka Pouta, ',
      'Minna Maaritsainen, ',
      'Tanja Testinen'
    ]
  }, {
    courseid: 4,
    name: 'Äidinkieli',
    styleClass: 'course-name',
    state: 'ended',
    users: [
      'Leo Tähti, ',
      'Jaana Saastamoinen, ',
      'Linnea Kuusisto, ',
      'Kaija Koponen, ',
      'Leena Manninen, ',
      'Kirsi Kataja, ',
      'Pekka Pouta, ',
      'Minna Maaritsainen, ',
      'Tanja Testinen'
    ]
  }, {
    courseid: 5,
    name: 'Ruotsi',
    styleClass: 'course-name',
    state: 'upcoming',
    users: [
      'Leo Tähti, ',
      'Jaana Saastamoinen, ',
      'Linnea Kuusisto, ',
      'Kaija Koponen, ',
      'Leena Manninen, ',
      'Kirsi Kataja, ',
      'Pekka Pouta, ',
      'Minna Maaritsainen, ',
      'Tanja Testinen'
    ]
  }
]

class AllCourses extends React.Component {
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
    
    const listFiles = courseList.map(name => {
      return (
        <div key={name.courseid} className={name.styleClass}>
          
          <NavLink to="/course" key={name.courseid}>
            <p>{name.name}</p>
          </NavLink>
          
          <div className="state-element">{name.state}</div>
          
          <div className="members-element" id={name.courseid}>{name.users.length}</div>
          
          <div className="usernames" id={name.courseid}>
            {name.users}
          </div>
          
        </div>
      )
    });
    
    console.log(courseList);
    
    return (
      <div className="all-courses-full">
        <Header />
        <Menu />
        <input className="search" onChange={this.handleChange}></input>
        <div className="all-courses-container">
          
          <select className="select-stats-scope">
            <option value="own-courses" defaultValue>Omat kurssit</option>
            <option value="all-courses">Kaikki kurssit</option>
          </select>
          
          <h2 className="materials-title"></h2>
          <select className="select-courses-scope">
            <option value="all" defaultValue>Kaikki</option>
            <option value="favorites">Suosikit</option>
            <option value="current">Käynnissä olevat</option>
            <option value="ended">Päättyneet</option>
            <option value="upcoming">Tulossa</option>
          </select>
          
          <div className="material-selection">
            {listFiles}
          </div>
          {!this.state.isHidden && <NewUserInfo />}
          <button className="addItem" onClick={this.toggleHidden.bind(this)}>+</button>
          
        </div>
      </div>
    );
  }
}

const NewUserInfo = () => {
  return (
    <div>
      <div className="side-menu">
        <NavLink to="/usersettings" exact className="side-menu-item">Luo uusi kurssi</NavLink>
      </div>
    </div>
  );
}

export default AllCourses;