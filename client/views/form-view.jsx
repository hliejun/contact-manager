import React, {Component} from 'react'
import {Link} from 'react-router'

export default class ContactForm extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 main-container">
                        <h2 className="page-header text-center">Something Contact</h2>
                        <form role="form" className="form-horizontal contract-form">
                            <div className="form-group">
                                <label className="col-sm-4 control-label">Full name:</label>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control contact-name-input" value=""/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-4 control-label">Email address:</label>
                                <div className="col-sm-6">
                                    <input type="email" className="form-control contact-email-input" value=""/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-4 control-label">Telephone number:</label>
                                <div className="col-sm-6">
                                    <input type="tel" className="form-control contact-tel-input" value=""/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-offset-4 col-sm-3">
                                    <button type="submit" className="btn btn-outline btn-lg btn-block">Submit</button>
                                </div>
                                <div className="col-sm-3">
                                    <Link to="/index.html" className="btn btn-outline btn-lg btn-block">Cancel</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
