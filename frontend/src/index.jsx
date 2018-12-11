import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Login from './login.jsx';
import Home from './Oma-OPPE/home.jsx';
import CourseStats from './Oma-OPPE/course-stats.jsx';
import SelectedCourse from './Oma-OPPE/selected-course.jsx';
import UserSettings from './Oma-OPPE/user-settings.jsx';
import AllMaterial from './Oma-OPPE/all-material-full.jsx';
import AllCourses from './Oma-OPPE/all-courses.jsx';
import CreateCourse from './Oma-OPPE/create-course.jsx';



class App extends React.Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    
    return (
      <Router>
        <div className="app">

          <Route path="/" exact strict render={()=>(
            <Login />
          )}/>
          
          <Route path="/home" exact strict render={()=>(
            <Home />
          )}/>
          
          <Route path="/coursestats" exact strict render={()=>(
            <CourseStats />
          )}/>
          
          <Route path="/course" exact strict render={()=>(
            <SelectedCourse />
          )}/>
          
          <Route path="/usersettings" exact strict render={()=>(
            <UserSettings />
          )}/>
          
          <Route path="/all-material" exact strict render={()=>(
            <AllMaterial />
          )}/>
          
          <Route path="/all-courses" exact strict render={()=>(
            <AllCourses />
          )}/>
          
          <Route path="/create-course" exact strict render={()=>(
            <CreateCourse />
          )}/>

        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
