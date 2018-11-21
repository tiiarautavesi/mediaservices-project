import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';

const studentsList = [
  {
    sid: 0,
    name: 'Opiskelija',
    task1: 'Kansion nimi: Tehtävän nimi',
    task2: 'Kansion nimi: Tehtävän nimi',
    task3: 'Kansion nimi: Tehtävän nimi',
    task4: 'Kansion nimi: Tehtävän nimi',
    task5: 'Kansion nimi: Tehtävän nimi',
    task6: 'Kansion nimi: Tehtävän nimi'
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
      username: ''
    };
  }
  
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
          </tr>
      )
    });
    
    return (
      <div className="stats-container">
        <h2 className="stats-title">Kurssi:</h2>
        <select className="select-stats-scope">
          <option value="course" defaultValue>Kurssin nimi</option>
          <option value="folder1">Kansio 1</option>
          <option value="folder2">Kansio 2</option>
          <option value="folder3">Kansio 3</option>
        </select>
        <table className="stats-table">
          <tbody>
          {listStats}
          </tbody>
        </table>
      </div>
    );
  }
}




export default CourseStats;