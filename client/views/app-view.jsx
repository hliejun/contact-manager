import React, {Component} from 'react'
import {Link} from 'react-router'

import HeaderBanner from '../components/header-banner.jsx'
import ContactList from '../views/list-view.jsx';
import ContactForm from '../views/form-view.jsx';

// Import CSS
require("bootstrap/dist/css/bootstrap.css");
require("../styles/main.css");

var myContacts = [
        {
            id: 1,
            name: 'Terrence S. Hatfield',
            tel: '651-603-1723',
            email: 'TerrenceSHatfield@rhyta.com'
        }, {
            id: 2,
            name: 'Chris M. Manning',
            tel: '513-307-5859',
            email: 'ChrisMManning@dayrep.com'
        }, {
            id: 3,
            name: 'Ricky M. Digiacomo',
            tel: '918-774-0199',
            email: 'RickyMDigiacomo@teleworm.us'
        }, {
            id: 4,
            name: 'Michael K. Bayne',
            tel: '702-989-5145',
            email: 'MichaelKBayne@rhyta.com'
        }, {
            id: 5,
            name: 'John I. Wilson',
            tel: '318-292-6700',
            email: 'JohnIWilson@dayrep.com'
        }, {
            id: 6,
            name: 'Rodolfo P. Robinett',
            tel: '803-557-9815',
            email: 'RodolfoPRobinett@jourrapide.com'
        }
    ];

var myItem = {};

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactList: myContacts,
            formDetails: {mode: "Create", contact: myItem}
        };
        this.onCreate = this.onCreate.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
    }

    onDelete(id) {
        var index = -1;

        for (var i = 0; i < this.state.contactList.length; ++i) {
            if (this.state.contactList[i].id == id) {
                index = i;
                break;
            }
        }

        var front = this.state.contactList.slice(0, index);
        var back = this.state.contactList.slice(index + 1, this.state.contactList.length);
        var res = front.concat(back);
        console.log(res);
        this.setState({contactList: res}, () => {console.log(this.state);});

    }

    onEdit(id) {
        // ... update state
        var target = {};
        for (var i = 0; i < this.state.contactList.length; ++i) {
            if (this.state.contactList[i].id == id) {
                target = this.state.contactList[i];
                break;
            }
        }
        this.setState({formDetails: {mode: "Edit", contact: target, id: target.id}}, () => {console.log(this.state);});
    }

    onCreate(contact) {
        // ... update state
        var largestID = 0;
        for (var i = 0; i < this.state.contactList.length; ++i) {
            if (this.state.contactList[i].id >= largestID) {
                largestID = this.state.contactList[i].id;
            }
        }
        this.setState({formDetails: {mode: "Create", contact: {}, id: largestID + 1}}, () => {console.log(this.state);});
    }

    onUpdate(contact) {
        var insertPoint = this.state.contactList.length;
        for (var i = 0; i < this.state.contactList.length; ++i) {
            if (this.state.contactList[i].id == contact.id) {
                insertPoint = i;
                break;
            }
        }
        var newList = this.state.contactList.slice(0, this.state.contactList.length);
        if (newList.length - 1 < insertPoint) {
            newList = newList.concat([contact]);
        } else {
            newList[insertPoint] = contact;
        }
        this.setState({contactList: newList}, () => {console.log(this.state);});
    }

    render() {
        return (
            <div>
                <HeaderBanner/>
                {
                    this.props.location.pathname === '/index.html' || this.props.location.pathname === '/index.html/home'
                    ? <ContactList onCreate={this.onCreate} onEdit={this.onEdit} onDelete={this.onDelete} contacts={this.state.contactList}/>
                    : <ContactForm onUpdate={this.onUpdate} formDetails={this.state.formDetails}/>
                }
            </div>
        );
    }
}
