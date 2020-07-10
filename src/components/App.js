import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import DrinkControl from './DrinkControler';
import './../App.css';

function App() {
  return (
    <div class="container pt-3">
      <React.Fragment>
        <Header/>
        <DrinkControl/>
      </React.Fragment>
    </div>
  );
}

export default App;
