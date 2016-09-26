import React, {Component} from 'react'
import AddContactButton from '../components/add-button.jsx'
import ContactThumbnail from '../components/contact-thumbnail.jsx'

export default class ContactList extends Component {
    render() {
        var contacts = this.props.contacts;
        var randomNumber = function(num) {
            // return Math.floor(Math.random() * 15);
            return num % 15 + 1;
        };
        var contactViews = contacts.map((contact, index) => <ContactThumbnail key={index} contactDetails={contact} avatarCode={randomNumber(index)}/>);
        return (
            <div>
                <h2 className="page-header text-center">List of contacts</h2>
                <p className="text-center">
                    <AddContactButton/>
                </p>
                <ul className="media-list contacts-container">{contactViews}</ul>
            </div>
        );
    }
}
