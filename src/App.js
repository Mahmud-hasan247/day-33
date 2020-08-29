import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const names = [{name: "Suleman shah", age: 50}, {name: "Eartugrul", age: 30}, {name: "usman", age: 20}, {name: "turgut", age: 29}, {name: "Bamsi", age: 28}, {name: "duan", age: 28}, {name: "artuk", age: 35}]
  const age = [25, 26, 29, 23, 39]
  return (
    
    <div className="App">
      <header className="App-header">
        {
          names.map(name => <Heros name={name.name} age={name.age}></Heros>)
        }
        {/* <Heros name= {names[0]} age= {age[0]}></Heros>
        <Heros name= {names[1]} age= {age[1]}></Heros>
        <Heros name= {names[2]} age= {age[2]}></Heros>
        <Heros name= {names[3]} age= {age[3]}></Heros> */}
        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
  );
}
function Heros(props){
  const heroStyle = {
    border: "3px solid cyan",
    borderRadius: "10px",
    padding: "15px",
    margin: "10px",
    width: "400px"
  }
  return(
    <div style= {heroStyle}>
      <h3><strong>Name: </strong>{props.name}</h3>
      <h5><strong>Age: </strong>{props.age}</h5>
      <Count></Count>
    </div>
  )
}
function Count(){
  const button = {
    border: "1px solid tomato",
    borderRadius: "50px",
    width: "150px",
    marginLeft: "130px"
  }
  const [count, setCount] = useState(0);
  const event = () => setCount(count + 1);
  const event2 = () => setCount(count - 1);
  return (
    <div>
      
    <h4 style={button} onClick={event}>Increase</h4>
    <h2>Total movies: {count}</h2>
    <h4 style={button} onClick={event2}>Decrease</h4>
    </div>
  )
}
export default App;
