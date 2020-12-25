
import './Counter.css';
import React,{Component} from 'react';


export default class Counter extends Component{

    constructor(){
        super();
        this.state={
            counter:0
        }
        this.increment=this.increment.bind(this);
        this.reset=this.reset.bind(this)
    }
    render(){
      return(
        <div className="counter">
          <CounterButton incrementmethod={this.increment}/>
          <CounterButton by={5} incrementmethod={this.increment}/>
          <CounterButton by={10} incrementmethod={this.increment}/>
          <div><button onClick={this.reset}>Reset</button></div>

          <span className="count">{this.state.counter}</span>
          
        </div>
      );
    }
    reset(){
        this.setState(
            (prevState)=>{
                return {counter:0}
            });
    }


    increment(by){
        // this.state.counter++;
        this.setState(
            (prevState)=>{
                return {counter:prevState.counter+by}
            });
        // console.log(`increment from parent- ${by}`);
    }
  }

class CounterButton extends Component
{
    constructor(){
        super();
    //     // this.state={
    //     //     counter:0
    //     // }
        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
    }
    render(){
        return(
            <div className="counterButton">

            {/* props from the counter button above (by) */}
              <button onClick={this.increment}>+{this.props.by}</button>
              <button onClick={this.decrement}>-{this.props.by}</button>
              
              {/* <span className="count">{this.state.counter}</span> */}
              {/* we dont need to add this */}
            </div>
          )
    }


    decrement(){
        this.props.incrementmethod(-(this.props.by))
    }

    increment(){
        // this.state.counter++;
        // this.setState({
        //     counter:this.state.counter+this.props.by
        // });

        // also calls the parent increment method
        this.props.incrementmethod(this.props.by);
    }
}

CounterButton.defaultProps={
    by:1
}

