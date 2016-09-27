import React, {Component} from 'react'
import AddContactButton from '../components/add-button.jsx'
import ContactThumbnail from '../components/contact-thumbnail.jsx'

export default class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: props.contacts
        };
    }

    handleDelete(event) {
        var targetToDelete = event.target.contact.id;
        // ... search and delete ...
        // this.setState({contacts: event.target.contacts});
    }

    handleAdd(event) {
        var targetToAdd = event.target.contact;
        // ... add to array ...
        // this.setState({contacts: event.target.contacts});
    }

    render() {
        var contacts = this.props.contacts;
        var randomNumber = function(num) {
            // return Math.floor(Math.random() * 14) + 1;
            return num % 15 + 1;
        };
        var contactViews = contacts.map((contact, index) => <ContactThumbnail onDelete={this.props.onDelete} onEdit={this.props.onEdit} key={index} contactDetails={contact} avatarCode={randomNumber(contact.id)}/>);
        return (
            <div>
                <h2 className="page-header text-center">List of contacts</h2>
                <p className="text-center">
                    <AddContactButton onCreate={this.props.onCreate}/>
                </p>
                <ul className="media-list contacts-container">{contactViews}</ul>
            </div>
        );
    }
}
