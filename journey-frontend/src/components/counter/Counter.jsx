
import './Counter.css';
import React,{Component} from 'react';


export default class Counter extends Component{

    constructor(){
        super();
        this.state={
            counter:0
        }
        this.increment=this.increment.bind(this);
    }
    render(){
      return(
        <div className="counter">
          <CounterButton incrementmethod={this.increment}/>
          <CounterButton by={5} incrementmethod={this.increment}/>
          <CounterButton by={10} incrementmethod={this.increment}/>

          <span className="count">{this.state.counter}</span>
          
        </div>
      );
    }


    increment(by){
        // this.state.counter++;
        this.setState({
            counter:this.state.counter+by
        });
        // console.log(`increment from parent- ${by}`);
    }
  }

class CounterButton extends Component
{
    constructor(){
        super();
        this.state={
            counter:0
        }
        this.increment=this.increment.bind(this);
    }
    render(){
        return(
            <div className="counterButton">
              <button onClick={this.increment}>+{this.props.by}</button>
              {/* <span className="count">{this.state.counter}</span> */}
              {/* we dont need to add this */}
            </div>
          )
    }

    increment(){
        // this.state.counter++;
        this.setState({
            counter:this.state.counter+this.props.by
        });
        this.props.incrementmethod(this.props.by);
    }
}

CounterButton.defaultProps={
    by:1
}

