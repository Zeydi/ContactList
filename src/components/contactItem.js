import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {findDOMNode} from 'react-dom';
import Tags from 'react-tagging-input';


import {Button, FormControl, FormGroup, ControlLabel} from 'react-bootstrap'

import {deleteContact, updateContact} from '../actions/contactsActions';
const divStyle = {
  margin: '10px',
  border: '5px solid #EAEDEC'
};
const buttonStyle = {
  margin: '10px'
}
class ContactItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showEditForm: false,
      tags: []
    };
  }
  onTagAdded = (tag) => {
    this.setState({
      tags: [...this.state.tags, tag]
    });
  }

  onTagRemoved = (tag, index) => {
    this.setState({
      tags: this.state.tags.filter((tag, i) => i !== index)
    });
  }
  onDelete = () => {
    const phone = this.props.phone;
    this.props.deleteContact(phone);
  }
  onEdit= () => {
    this.setState({
      showEditForm:true
    })
  }
  handleSubmit = (e) => {
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

    this.props.updateContact(this.props.phone, contact)
    this.setState({
      showEditForm:false
    })
    console.log(contact)
  } else alert('Same phone found')
} else alert('invalid phone')

}
  render(){
    return(
      <div style={divStyle}>
        {this.state.showEditForm && <div>
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="name">
            <ControlLabel>Name</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter name"
              ref="name"/>
            </FormGroup>
            <FormGroup controlId="phone">
            <ControlLabel>Phone</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter phone (min 710 digits)"
              ref="phone"/>
            </FormGroup>
            <button bsStyle="primary"> Save </button>
          </form>
          <Tags
            tags={this.state.tags}
            placeholder="Add a tag"
            onAdded={this.onTagAdded}
            onRemoved={this.onTagRemoved} />
        <br/>
        </div>}
        {!this.state.showEditForm &&
          <div >
            <h6>Name : {this.props.name}</h6>
            <h6>Phone: {this.props.phone}</h6>
            <Tags
              tags={this.state.tags}
              placeholder="Add a tag"
              onAdded={this.onTagAdded}
              onRemoved={this.onTagRemoved} />
            <br/>
            <button style={buttonStyle} onClick={this.onDelete}> remove </button>
            <button style={buttonStyle}  onClick={this.onEdit}> edit </button>
            </div>}
    </div>


    )
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    deleteContact: deleteContact,
    updateContact: updateContact
  }, dispatch)
}


export default connect(null, mapDispatchToProps)(ContactItem);
