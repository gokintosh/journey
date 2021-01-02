import React,{Component} from 'react'
import JourneyDataService from '../../api/journey/JourneyDataService.js'
import AuthenticationService from './AuthenticationService.js'


export default class ListJournalComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            journals:
            [
                // {id:1,description:'Learn React',done:false,targetDate:new Date()},
                // {id:2,description:'Learn Spring boot',done:false,targetDate:new Date()},
                // {id:3,description:'Learn MicroServices',done:false,targetDate:new Date()}
            ],
            message:""
            
        }
        this.deleteJournalClicked=this.deleteJournalClicked.bind(this);
        this.refreshJournals=this.refreshJournals.bind(this);
        this.updateJournalClicked=this.updateJournalClicked.bind(this);
    }

    componentDidMount(){
        this.refreshJournals();
    }

    deleteJournalClicked(id){
        let userName=AuthenticationService.getUserLoggedIn();
        console.log(id +" "+userName)
        JourneyDataService.deleteJournal(userName,id)
        .then(
            response=>{
                this.setState({message:`Deleted Journal id -${id}`})
            }
        )
    }

    updateJournalClicked(id){
        // let userName=AuthenticationService.getUserLoggedIn();
        // console.log(id +" "+userName)
        // JourneyDataService.deleteJournal(userName,id)
        // .then(
        //     response=>{
        //         this.setState({message:`Deleted Journal id -${id}`})
        //     }
        // )

        console.log("update "+id)
    }

    refreshJournals(){
        let userName=AuthenticationService.getUserLoggedIn();
        JourneyDataService.retreiveAllJournals(userName)
        .then(
            response=>{
                // console.log(response)
                this.setState({journals:response.data})
                this.refreshJournals();
            }
        )
    }

    render(){
        return (
            <div>
                <h1>Journal List</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>description</th>
                                <th>Completed</th>
                                <th>target date</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.journals.map(
                                    journal=>
                                    <tr key={journal.id}>
                                        <td>{journal.description}</td>
                                        <td>{journal.done.toString()}</td>
                                        <td>{journal.targetdate.toString()}</td>
                                        <td><button className="btn btn-warning" onClick={()=>this.updateJournalClicked(journal.id)}>Update</button></td>
                                        <td><button className="btn btn-danger" onClick={()=>this.deleteJournalClicked(journal.id)}>Delete</button></td>
                                    </tr>
                                )
                            
                            }
                        </tbody>
                    </table>
                </div>
                
            </div>
        )
    }
}