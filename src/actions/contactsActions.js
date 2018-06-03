export function getContacts(){
  return {
    type: "GET_CONTACT",
  }
}

export function addContact(contact){
  return {
    type: "POST_CONTACT",
    payload: contact
  }
}
export function deleteContact(phone){
  return {
    type: "DELETE_CONTACT",
    payload: phone
  }
}
export function updateContact(phone, contact){
  return {
    type: "UPDATE_CONTACT",
    payload: { phone, contact }
  }
}
