import React,{Component} from 'react'
import AuthenticationService from './AuthenticationService.js'
export default class LoginComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            username:'gokulnair',
            password:'',
            hasLoginFailed:false,
            showSuccessMessage:false
        }
        // this.handleUsernameChange=this.handleUsernameChange.bind(this);
        // this.handlePasswordChange=this.handlePasswordChange.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.loginClicked=this.loginClicked.bind(this);
    }

    // handles the change in 

    handleChange(event){
        console.log(this.state)
        this.setState({[event.target.name]:event.target.value})
    }
    loginClicked(){
        if(this.state.username==='gokulnair'&&this.state.password==='dummy')
            {
                AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password);
                // console.log('login success')
                this.props.history.push(`/welcome/${this.state.username}`)
                // this.setState({showSuccessMessage:true})
                // this.setState({hasLoginFailed:false})
            }
        else
            {
                console.log('failed')
                this.setState({showSuccessMessage:false})
                this.setState({hasLoginFailed:true})
            }
    }

    // handleUsernameChange(event){
    //     console.log(event.target.value)
    //     this.setState({username:event.target.value})
    // }

    // handlePasswordChange(event){
    //     console.log(event.target.value)
    //     this.setState({password:event.target.value})
    // }


    render(){
        return(
            <div>
                <h1>Login</h1>
                <div>
                    {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>
                    <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/> */}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Login Failed</div>}
                    {this.state.showSuccessMessage && <div>Login Success</div>}
                    
                    UserName: <input type="text" name="username" onChange={this.handleChange} value={this.state.username}/>
                    Password: <input type="password" name="password" onChange={this.handleChange} value={this.state.password}/>
                    
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>

                </div>
            </div>
        )
    }
}
