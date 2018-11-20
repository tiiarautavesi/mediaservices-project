import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login.jsx';
import Home from './Oma-OPPE/home.jsx';



class App extends React.Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    
    return (
      <div className="app">
        <Home />
        <footer>&#169; 2018 Tiia Rautavesi</footer>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
