import React, {Component} from 'react'
import {Router} from 'react-router'
import {Link} from 'react-router'

class ContactThumbnail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.contactDetails.id,
            name: props.contactDetails.name,
            tel: props.contactDetails.tel,
            email: props.contactDetails.email,
            avatarCode: props.avatarCode
        };
        this.onEdit = this.onEdit.bind(this);
        this.onDelete = this.onDelete.bind(this);

// COMPONENT DID MOUNT
    }

    onEdit() {
        this.props.onEdit(this.props.contactDetails.id);
    }

    onDelete() {
        // this.context.router.push('/index.html');
        this.props.onDelete(this.props.contactDetails.id);
    }

    render() {
        var avatar = "../resources/faces/" + this.props.avatarCode + ".jpg";
        var name = this.props.contactDetails.name;
        var tel = this.props.contactDetails.tel;
        var email = this.props.contactDetails.email;

        return (
            <div>
                <li className="media col-md-6 col-lg-4">
                    <div className="thumbnail">
                        <img className="media-object" src={avatar}/>
                    </div>
                    <div className="media-heading">
                        <h3>
                            {name}
                            <small>
                                &nbsp;
                                <Link to="/index.html/form" className="edit-contact">
                                    <span onClick={this.onEdit} to="/index.html/form" className="glyphicon glyphicon-pencil"></span>
                                </Link>
                                &nbsp;
                                <a className="delete-contact">

                                    <span onClick={this.onDelete} className="glyphicon glyphicon-trash"></span>

                                </a>
                            </small>
                        </h3>
                    </div>
                    <div className="media-body">
                        <dl>
                            <dt>Phone Number:</dt>
                            <dd>
                                {tel}
                            </dd>
                            <dt>Email:</dt>
                            <dd>
                                {email}
                            </dd>
                        </dl>
                    </div>
                    <hr/>
                </li>
            </div>
        );
    }
}

ContactThumbnail.contextTypes = {
    router: React.PropTypes.object
};

export default ContactThumbnail;
