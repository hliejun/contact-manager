import React, {Component} from 'react'

export default class ContactThumbnail extends Component {
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

                                <a href="#contacts/edit/id">
                                    <span className="glyphicon glyphicon-pencil"></span>
                                </a>

                                <a href="#contacts/delete/id" className="delete-contract">

                                    <span className="glyphicon glyphicon-trash"></span>

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
