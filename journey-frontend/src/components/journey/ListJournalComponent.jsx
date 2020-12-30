import React, {Component} from 'react'


export default class ListJournalComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            journals:
                [
                    {id: 1, description: 'Learn React', done: false, targetDate: new Date()},
                    {id: 2, description: 'Learn Spring boot', done: false, targetDate: new Date()},
                    {id: 3, description: 'Learn MicroServices', done: false, targetDate: new Date()}
                ]

        }
    }

    render() {
        return (
            <div>
                <h1>Journal List</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>description</th>
                            <th>Completed</th>
                            <th>target date</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.journals.map(
                                journal =>
                                    <tr key={journal.id}>
                                        <td>{journal.description}</td>
                                        <td>{journal.done.toString()}</td>
                                        <td>{journal.targetDate.toString()}</td>
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