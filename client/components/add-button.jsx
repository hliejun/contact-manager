import React, {Component} from 'react'
import {Link} from 'react-router'

export default class AddContactButton extends Component {
    render() {
        return (

            <Link className = "btn btn-lg btn-outline" to={"/index.html/form"}>Add Contact</Link>

        );
    }
}
