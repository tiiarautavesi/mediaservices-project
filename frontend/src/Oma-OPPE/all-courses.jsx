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
    styleClass: 'course-name'
  }, {
    courseid: 2,
    name: 'Äidinkieli',
    styleClass: 'course-name'
  }, {
    courseid: 3,
    name: 'Ruotsi',
    styleClass: 'course-name'
  }, {
    courseid: 4,
    name: 'Äidinkieli',
    styleClass: 'course-name'
  }, {
    courseid: 5,
    name: 'Ruotsi',
    styleClass: 'course-name'
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
        <NavLink to="/course" className={name.styleClass} key={name.courseid}>
          <p>{name.name}</p>
        </NavLink>
      )
    });
    
    
    return (
      <div className="all-courses-full">
        <Header />
        <Menu />
        <input className="search" onChange={this.handleChange}></input>
        <div className="all-courses-container">
          <h2 className="materials-title">Kurssit</h2>
          
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