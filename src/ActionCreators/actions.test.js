
import onSendMsg from "./actions";
import { updateContactData } from "../Slices/contactsSlice";
import moment from "moment";


it('should be called once', () => {
  const mockFun=jest.fn(updateContactData)
 
 const msgObj={
   msg:'Hello, world!',
   time:'10:10 Am'
 }
mockFun(msgObj)
expect(mockFun.mock.calls).toHaveLength(1)
 
});

it('msgObj type should be object', () => {
   const mockFun=jest.fn(updateContactData)
  
  const msgObj={
    msg:'Hello, world!',
    time:'10:10 Am'
  }
 mockFun(msgObj)
 expect(typeof mockFun.mock.calls[0][0]).toBe('object') 
});

test('textMsg should not be undefined,Null',()=>{
  const textmsg="hello"
  
  expect(onSendMsg(textmsg)).not.toBe("")
}
)

it('textMsg type should be string', () => {
  const textmsg="hello"  

  expect(typeof textmsg).toBe('string')
 
});

it('time type should be string', () => {
  let time=moment().format('LT');  

  expect(typeof time).toBe('string')
 
});

it('time typeeeeeee should be string', () => {
  let time=moment().format('LT');  

  expect(typeof time).toBe('string')
 
});
  
