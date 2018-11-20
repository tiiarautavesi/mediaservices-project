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
    task2: '20/20',
    task3: '17/20',
    task4: '17/20',
    task5: '',
    task6: ''
  }, {
    sid: 2,
    name: 'Pertti Poronen',
    task1: '1/20',
    task2: '17/20',
    task3: '17/20',
    task4: '17/20',
    task5: '',
    task6: ''
  }, {
    sid: 3,
    name: 'Mikko Mallikas',
    task1: '8/20',
    task2: '17/20',
    task3: '',
    task4: '17/20',
    task5: '',
    task6: ''
  }, {
    sid: 4,
    name: 'Tiina Tarula',
    task1: '18/20',
    task2: '12/20',
    task3: '17/20',
    task4: '17/20',
    task5: '',
    task6: ''
  }, {
    sid: 5,
    name: 'Marja Manninen',
    task1: '0/20',
    task2: '17/20',
    task3: '17/20',
    task4: '17/20',
    task5: '',
    task6: ''
  }, {
    sid: 6,
    name: 'Tiuku Tamminen',
    task1: '20/20',
    task2: '19/20',
    task3: '17/20',
    task4: '17/20',
    task5: '',
    task6: ''
  }, {
    sid: 7,
    name: 'Ville Valo',
    task1: '14/20',
    task2: '18/20',
    task3: '',
    task4: '17/20',
    task5: '',
    task6: ''
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
    
    const listNames = studentsList.map(name => {
      return (
        <div>
          <tr key={name.sid}>
            <th className="student-name">{name.name}</th>
            <td>{name.task1}</td>
            <td>{name.task2}</td>
            <td>{name.task3}</td>
            <td>{name.task4}</td>
            <td>{name.task5}</td>
            <td>{name.task6}</td>
          </tr>
        </div>
      )
    });
    
    return (
      <div className="stats-container">
        {listNames}
      </div>
    );
  }
}

export default CourseStats;