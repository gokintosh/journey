import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import HelloWorldService from '../../api/journey/HelloWorldService.js'

export default class WelcomeComponent extends Component{
    constructor(props){
        super(props)
        this.retrieveWelcomeMessage=this.retrieveWelcomeMessage.bind(this)
        this.state={
            welcomeMessage:""
        }
        this.handleSuccessfullresponse=this.handleSuccessfullresponse.bind(this)
    }

    render(){
        return (
            <>
                <h1>Welcome !!</h1>
                <div className="container">@{this.props.match.params.name}. Go to your journal <Link to="/journals">here</Link></div>
                <div className="container">
                    click the button to show a welcome message from backend
                    <button className="btn btn-success" onClick={this.retrieveWelcomeMessage}>Click me</button>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
            </>
        )
    }

    retrieveWelcomeMessage(){
        // HelloWorldService.executeHelloWorldService()
        // .then(response=>this.handleSuccessfullresponse(response))
        // .catch()
        // HelloWorldService.executeHelloWorldBeanService()
        // .then(response=>this.handleSuccessfullresponse(response))
        // .catch()
        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
        .then(response=>this.handleSuccessfullresponse(response))
        // .catch()
    }

    handleSuccessfullresponse(response){
        this.setState({welcomeMessage:response.data.message})
        
    }
}