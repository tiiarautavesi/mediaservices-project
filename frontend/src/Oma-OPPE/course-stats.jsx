import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';
import Header from './header.jsx';
import Menu from './menu.jsx';

const studentsList = [
  {
    sid: 0,
    name: 'Opiskelija',
    task1: 'Kansion nimi: Tehtävän nimi',
    task2: 'Kansion nimi: Tehtävän nimi',
    task3: 'Kansion nimi: Tehtävän nimi',
    task4: 'Kansion nimi: Tehtävän nimi',
    task5: 'Kansion nimi: Tehtävän nimi',
    task6: 'Kansion nimi: Tehtävän nimi',
    allPoints: 'Kokonaispisteet',
    grade: 'Arvosana'
  }, {
    sid: 111,
    name: 'Keskiarvo',
    task1: '17/20',
    class1: 'pass',
    task2: '20/20',
    class2: 'pass',
    task3: '17/20',
    class3: 'pass',
    task4: '17/20',
    class4: 'pass',
    task5: '',
    class5: 'empty',
    task6: '',
    class6: 'empty'
  }, {
    sid: 112,
    name: 'Painoarvo',
    task1: '1',
    task2: '2',
    task3: '10',
    task4: '10',
    task5: '0',
    task6: '2',
    allPoints: '25',
    grade: 'Läpipääsyraja 12'
  }, {
    sid: 113,
    name: 'Julkaisuaika',
    task1: '20.11.',
    class1: 'published',
    task2: '23.11.',
    class2: 'published',
    task3: '10.12',
    class3: 'unpublished',
    task4: '20.11.',
    class4: 'published',
    task5: '?',
    class5: 'unpublished',
    task6: '2.12.',
    class6: 'unpublished'
  }, {
    sid: 114,
    name: 'Viimeinen palautuspäivä',
    task1: '22.11.',
    class1: 'late',
    task2: '23.11.',
    class2: 'ongoing',
    task3: '12.12',
    class3: 'ongoing',
    task4: '30.11.',
    class4: 'ongoing',
    task5: '12.12.',
    class5: 'ongoing',
    task6: '12.12.',
    class6: 'ongoing'
  }, {
    sid: 1,
    name: 'Timo Teronen',
    task1: '17/20',
    class1: 'pass',
    task2: '20/20',
    class2: 'pass',
    task3: '17/20',
    class3: 'pass',
    task4: '17/20',
    class4: 'pass',
    task5: '',
    class5: 'empty',
    task6: '',
    class6: 'empty'
  }, {
    sid: 2,
    name: 'Pertti Poronen',
    task1: '1/20',
    class1: 'fail',
    task2: '17/20',
    class2: 'pass',
    task3: '17/20',
    class3: 'pass',
    task4: '17/20',
    class4: 'pass',
    task5: '',
    class5: 'empty',
    task6: '',
    class6: 'empty'
  }, {
    sid: 3,
    name: 'Mikko Mallikas',
    task1: '8/20',
    class1: 'fail',
    task2: '17/20',
    class2: 'pass',
    task3: 'Arvioi',
    class3: 'check',
    task4: '17/20',
    class4: 'pass',
    task5: '',
    class5: 'empty',
    task6: '',
    class6: 'empty'
  }, {
    sid: 4,
    name: 'Tiina Tarula',
    task1: '18/20',
    class1: 'pass',
    task2: '12/20',
    class2: 'pass',
    task3: '',
    class3: 'empty',
    task4: '17/20',
    class4: 'pass',
    task5: '',
    class5: 'empty',
    task6: '',
    class6: 'empty'
  }, {
    sid: 5,
    name: 'Marja Manninen',
    task1: '0/20',
    class1: 'fail',
    task2: '17/20',
    class2: 'pass',
    task3: '17/20',
    class3: 'pass',
    task4: '17/20',
    class4: 'pass',
    task5: '',
    class5: 'empty',
    task6: '',
    class6: 'empty'
  }, {
    sid: 6,
    name: 'Tiuku Tamminen',
    task1: '20/20',
    class1: 'pass',
    task2: '19/20',
    class2: 'pass',
    task3: '17/20',
    class3: 'pass',
    task4: '17/20',
    class4: 'pass',
    task5: '',
    class5: 'empty',
    task6: '',
    class6: 'empty'
  }, {
    sid: 7,
    name: 'Ville Valo',
    task1: '14/20',
    class1: 'pass',
    task2: '18/20',
    class2: 'pass',
    task3: '',
    class3: 'empty',
    task4: '17/20',
    class4: 'pass',
    task5: '',
    class5: 'empty',
    task6: '',
    class6: 'empty'
  }
]

class CourseStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active1: true,
      active2: false,
      active3: false
    };
  }
  
  toggleClass() {
    const currentState = this.state.active1;
    this.setState({ active1: !currentState });
  };
  
  render() {
    
    const listStats = studentsList.map(name => {
      return (
          <tr key={name.sid}>
            <td className="student-name">{name.name}</td>
            <td className="task-box">
              <div className={name.class1}>
                {name.task1}
              </div>
            </td>
            <td className="task-box">
              <div className={name.class2}>
                {name.task2}
              </div>
            </td>
            <td className="task-box">
              <div className={name.class3}>
                {name.task3}
              </div>
            </td>
            <td className="task-box">
              <div className={name.class4}>
                {name.task4}
              </div>
            </td>
            <td className="task-box">
              <div className={name.class5}>
                {name.task5}
              </div>
            </td>
            <td className="task-box">
              <div className={name.class6}>
                {name.task6}
              </div>
            </td>
            <td className="task-box">
              <div>
                {name.allPoints}
              </div>
            </td>
            <td className="task-box">
              <div>
                {name.grade}
              </div>
            </td>
          </tr>
      )
    });
    
    return (
      <div>
        <Header />
        <Menu />
        <div className="stats-menu">
          <div className={this.state.active1 ? 'active-item stats-menu-item': 'stats-menu-item'} onClick={this.toggleClass}>Kurssikohtainen</div>
          <div className={this.state.active2 ? 'active-item stats-menu-item': 'stats-menu-item'} onClick={this.toggleClass}>Oppilaskohtainen</div>
          <div className={this.state.active3 ? 'active-item stats-menu-item': 'stats-menu-item'} onClick={this.toggleClass}>Mapat</div>
        </div>
        
        <div className="title-bar">
          <h2 className="stats-title">Kurssi:</h2>
          <select className="select-stats-scope">
            <option value="course" defaultValue>Kurssin nimi</option>
            <option value="folder1">Kansio 1</option>
            <option value="folder2">Kansio 2</option>
            <option value="folder3">Kansio 3</option>
          </select>
        </div>
        
        <div className="stats-container">
          <table className="stats-table">
            <tbody>
            {this.state.active1 && listStats}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}




export default CourseStats;