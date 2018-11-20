import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';
import Header from './header.jsx';
import RecentMaterial from './recent-material.jsx';
import AllMaterial from './all-material.jsx';
import CreateMaterial from './create-material.jsx';
import RecentGroups from './recent-groups.jsx';
import SelectedCourse from './selected-course.jsx';
import Menu from './menu.jsx';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }

  render() {
    
    return (
      <div className="app">
        <Header />
        <Menu />
        <SelectedCourse />
      </div>
    );
  }
}

export default Home;