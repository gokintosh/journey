import React,{Component} from 'react';


import './App.css';
import './bootstrap.css';


import Journey from './components/journey/Journey';




class App extends Component{
  render(){
    return(
      <div className="App">
        {/* <Counter/> */}
        <Journey/>
      </div>
    );
  }
}











export default App;