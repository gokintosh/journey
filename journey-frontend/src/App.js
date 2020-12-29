import React,{Component} from 'react';
import FirstComponent from './components/learning-examples/FirstComponent'
import SecondComponent from './components/learning-examples/SecondComponent'
import ThirdComponent from './components/learning-examples/ThirdComponent'

import './App.css';
import './bootstrap.css';
import Counter from './components/counter/Counter';

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


class LearningComponents extends Component{
  render(){
    return(
      <div className="learningcomponent">
        <h1>Hello World!!</h1>
        <FirstComponent/>
        <SecondComponent/>
        <ThirdComponent/>
      </div>
    );
  }
}








export default App;