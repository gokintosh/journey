import React,{Component} from 'react'
import {BrowserRouter as Router,Link,Route, Switch} from 'react-router-dom'


export default class Journey extends Component{
    render(){
        return(
            <div className="journal">
                <Router>
                    <>
                        <HeaderComponent/>
                            <Switch>
                                <Route path="/" exact component={LoginComponent}/>
                                <Route path="/login" component={LoginComponent}/>
                                <Route path="/welcome/:name" component={WelcomeComponent}/>
                                <Route path="/welcome/:name" component={ListJournalComponent}/>
                                <Route path="/journals" component={ListJournalComponent}/>
                                
                                <Route component={ErrorComponent}/>
                            </Switch>
                        <FooterComponent/>
                    </>
                </Router>

                {/* <WelcomeComponent/> */}
                {/* <LoginComponent/> */} 
            </div>
        )
    }
}

class HeaderComponent extends Component{
    render(){
        return(
            <div>Header<hr/></div>
        )
    }
}
class FooterComponent extends Component{
    render(){
        return(
            <div><hr/>Footer</div>
        )
    }
}

class ListJournalComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            journals:
            [
                {id:1,description:'Learn React',done:false,targetDate:new Date()},
                {id:2,description:'Learn Spring boot',done:false,targetDate:new Date()},
                {id:3,description:'Learn MicroServices',done:false,targetDate:new Date()}
            ]
            
        }
    }

    render(){
        return (
            <div>
                <h1>Journal List</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>description</th>
                            <th>Completed</th>
                            <th>target date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.journals.map(
                                journal=>
                                <tr>
                                    <td>{journal.id}</td>
                                    <td>{journal.description}</td>
                                    <td>{journal.done.toString()}</td>
                                    <td>{journal.targetDate.toString()}</td>
                                </tr>
                            )
                         
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

class WelcomeComponent extends Component{
    render(){
        return <div><h1>Welcome to Journey, {this.props.match.params.name}. Go to your journal <Link to="/journals">here</Link></h1></div>
    }
}


function ErrorComponent(){
    return <div>Some Error Occured!</div>
}

class LoginComponent extends Component{

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
                {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>
                <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/> */}
                {this.state.hasLoginFailed && <div>Login Failed</div>}
                {this.state.showSuccessMessage && <div>Login Success</div>}
                
                UserName: <input type="text" name="username" onChange={this.handleChange} value={this.state.username}/>
                Password: <input type="password" name="password" onChange={this.handleChange} value={this.state.password}/>
                
                <button onClick={this.loginClicked}>Login</button>

            </div>
        )
    }
}


// function ShowInvalidCredentials(props){
//     if(props.hasLoginFailed){
//         return <div>Invalid Credentials</div>
//     }
//     return null
    
// }
// function ShowLoginSuccessMessage(props){
//     if(props.showSuccessMessage){
//         return <div>login success</div>
//     }
//     return null
    
// }