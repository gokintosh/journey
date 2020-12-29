import React,{Component} from 'react'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'

import AuthenticatedRoute from './AuthenticatedRoute'
import LoginComponent from './LoginComponent'
import ListJournalComponent from './ListJournalComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import LogOutComponent from './LogOutComponent'
import WelcomeComponent from './WelcomeComponent'
import ErrorComponent from './ErrorComponent'


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
                                <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                                
                                <AuthenticatedRoute path="/journals" component={ListJournalComponent}/>
                                <AuthenticatedRoute path="/logout" component={LogOutComponent}/>
                                
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