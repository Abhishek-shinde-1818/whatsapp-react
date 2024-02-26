
import { updateContactData, updataMessages } from "../Slices/contactsSlice";

import moment from "moment";
function onSendMsg(textMsg) {
  
    return (dispatch,getstate) => {
       
        
        let msgObj={}
        msgObj.msg=textMsg
        let time=moment().format('LT');  
        msgObj.time=time
          
        
        dispatch(updateContactData({msgObj}))
       

    };
  }
  export default onSendMsg
 
 