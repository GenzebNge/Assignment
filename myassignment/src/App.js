import React from 'react';
import TemperaturConvertion from './components/unit-conversion/temperature/TemperatureConversion'
import VolumeConversion from './components/unit-conversion/volume/VolumeConversion'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/unit-conversion/Home'
import './App.css';

function App() {


  return (
    <div className="App">
      <Router>
      
       <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/temperature" component={TemperaturConvertion}/>
        <Route path="/volume" component ={VolumeConversion} />
        <Route component ={Error} />
        </Switch>
      </Router>
    </div>
  );
}

function Error (){
    return <p >Something went Wrong! Please check the path!</p>
} 

export default App;
