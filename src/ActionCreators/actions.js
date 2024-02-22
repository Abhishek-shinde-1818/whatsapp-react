
import { updateContactData, updataMessages } from "../Slices/contactsSlice";

function onSendMsg(msgobj,selectedContact,contactArr) {
  
    return dispatch => {
         
        console.log("contactArr", contactArr);
        let msgArr=[...selectedContact.messages]
        msgArr.push(msgobj)
        var index = contactArr.findIndex(contact => contact.mobileNo === selectedContact.mobileNo);
         dispatch(updateContactData({index,msgArr}))
        //dispatch(updataMessages({msgobj,selectedContact}))
    };
  }
  export default onSendMsg