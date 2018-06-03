import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {findDOMNode} from 'react-dom';
import {Well, Panel, FormControl, FormGroup, ControlLabel} from 'react-bootstrap';
import {addContact} from '../actions/contactsActions';
class ContactsForm extends React.Component{
  handleClick = (e) => {
    e.preventDefault();
    const phoneno = /^\d{10,}$/;

    if (findDOMNode(this.refs.name).value.length === 0 || findDOMNode(this.refs.phone).value === 0 ) {
      alert('input empty')
    } else if (findDOMNode(this.refs.phone).value.match(phoneno)) {
    if (this.props.contacts.every((contact) => contact.phone !== findDOMNode(this.refs.phone).value )) {
      const contact = {
      name:findDOMNode(this.refs.name).value,
      phone:findDOMNode(this.refs.phone).value
    }

    findDOMNode(this.refs.name).value = '';
    findDOMNode(this.refs.phone).value = '';
    this.props.addContact(contact)
  } else  alert("Same phone number found !")

} else alert('invalid phone')
}
  render(){
    return(
      <Well>
        <Panel>
        <form onSubmit={this.handleClick}>
          <FormGroup controlId="name">
            <ControlLabel>Name</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter name"
              ref="name"/>
          </FormGroup>

          <FormGroup controlId="phone">
            <ControlLabel>Phone (min 10 digits) </ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter phone"
              ref="phone"/>
          </FormGroup>
          <button> Save </button>
          </form>
        </Panel>
      </Well>
    )
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({
    addContact: addContact
  }, dispatch)
}


export default connect(null, mapDispatchToProps)(ContactsForm);
