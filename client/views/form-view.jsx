import React, {Component} from 'react'
import {Router, Link} from 'react-router'
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap'

const ContactForm = React.createClass({
    getInitialState() {
        return {id: this.props.formDetails.id, name: this.props.formDetails.contact.name, tel: this.props.formDetails.contact.tel, email: this.props.formDetails.contact.email};
    },

    handleChangeName(event) {
        // Validation
        this.setState({name: event.target.value});
    },

    handleChangeTel(event) {
        // Validation
        this.setState({tel: event.target.value});
    },

    handleChangeEmail(event) {
        // Validation
        this.setState({email: event.target.value});
    },

    onSubmit(event) {
        const formContact = {id: this.state.id, name: this.state.name, tel: this.state.tel, email: this.state.email};
        event.preventDefault();
        console.log(this.state);
        this.props.onUpdate(formContact);
        this.context.router.push('/index.html');
    },

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 main-container">
                        <h2 className="page-header text-center">{this.props.formDetails.mode} Contact</h2>

                        <form onSubmit={this.onSubmit} role="form" className="form-horizontal contract-form">
                            <div className="form-group">
                                <label className="col-sm-4 control-label">Full name:</label>
                                <div className="col-sm-6">

                                    <input type="text" className="form-control contact-name-input" defaultValue={this.state.name} onChange={this.handleChangeName}/>

                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-4 control-label">Email address:</label>
                                <div className="col-sm-6">

                                    <input type="email" className="form-control contact-email-input" defaultValue={this.state.email} onChange={this.handleChangeEmail}/>

                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-4 control-label">Telephone number:</label>
                                <div className="col-sm-6">

                                    <input type="tel" className="form-control contact-tel-input" defaultValue={this.state.tel} onChange={this.handleChangeTel}/>

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
});

ContactForm.contextTypes = {
  router: React.PropTypes.object
};

export default ContactForm;

// this.handleChangeName = this.handleChangeName.bind(this);
// this.handleChangeTel = this.handleChangeTel.bind(this);
// this.handleChangeEmail = this.handleChangeEmail.bind(this);

// <!--input type="text" className="form-control contact-name-input" value={this.props.contact.name}/-->
// <!--input type="email" className="form-control contact-email-input" value={this.props.contact.email}/-->
// <!--input type="tel" className="form-control contact-tel-input" value={this.props.contact.tel}/-->
