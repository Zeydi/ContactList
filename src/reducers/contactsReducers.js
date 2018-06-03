export function contactsReducers(state=[], action){
  switch(action.type){
    case "GET_CONTACT":
      return {...state}
      break;
    case "POST_CONTACT":
      return state.concat(action.payload);
      break;
    case "DELETE_CONTACT":
      return state.filter(contact => contact.phone !== action.payload)
      break;
    case "UPDATE_CONTACT":
      state.map(contact => contact.phone === action.payload.phone ?
        { ...contact, name: action.payload.contact.name,
        phone: action.payload.contact.phone } :
        contact
      )

      return state.map(contact => contact.phone === action.payload.phone ?
        { ...contact, name: action.payload.contact.name,
          phone: action.payload.contact.phone
        }
         :
        contact
        )
      break;
    default:
      return state
  }
}
