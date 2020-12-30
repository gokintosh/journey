import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class WelcomeComponent extends Component {
    render() {
        return (
            <>
                <h1>Welcome !!</h1>
                <div className="container">@{this.props.match.params.name}. Go to your journal <Link
                    to="/journals">here</Link></div>
            </>
        )
    }
}