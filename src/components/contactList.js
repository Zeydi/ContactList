import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Grid, Col} from 'react-bootstrap'

import {getContacts, deleteContact} from '../actions/contactsActions';
import ContactItem from './contactItem';
import ContactsForm from './contactsForm';
class ContactsList extends React.Component {


  render(){
    const contactsList = this.props.contacts.map((contact) => {
      return(
        <Col xs={12} sm={12} md={12} key={contact.phone} >
          <ContactItem
            name={contact.name}
            phone={contact.phone}
            contacts={this.props.contacts}/>
        </Col>
      )
    })
    return(
      <Grid>
        <ContactsForm contacts={this.props.contacts}/>
        {contactsList}
      </Grid>
    )
  }
}
function mapStateToProps(state){
  return {
    contacts: state.contacts
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getContacts: getContacts,
    deleteContact:deleteContact
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
