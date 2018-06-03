import {combineReducers} from 'redux';

import {contactsReducers} from './contactsReducers';
export default combineReducers({
  contacts: contactsReducers,
})
