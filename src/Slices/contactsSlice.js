import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  contactData:[
    {
      contactName:"rohan",
      mobileNo:9999999999,
      profile:"./rohan.jpg",
      messages:[{msg:"hii",time:"10:10 AM"}]
    },
    {
      contactName:"shrikant",
      mobileNo:8888888888,
      profile:"./ashish.jpg",
      messages:[{msg:"hii",time:"03:10 PM"}]
    },
    {
      contactName:"Ashish",
      mobileNo:7777777777,
      profile:"./shriknt.jpg",
      messages:[{msg:"bye",time:"10:40 PM"}]
    },
    {
      contactName:"bhargav",
      mobileNo:6666666666,
      profile:"./rainbow.jpg",
      messages:[{msg:"hii",time:"06:11 PM"}]
    },
    {
      contactName:"prasenjit",
      mobileNo:5555555555,
      profile:"./bhargav.jpg",
      messages:[{msg:"hii",time:"08:10 PM"}]
    },
    {
      contactName:"Harshal",
      mobileNo:4444444444,
      profile:"./harshal1.jpg",
      messages:[{msg:"hii",time:"10:50 PM"}]
    },{
      contactName:"hemant",
      mobileNo:3333333333,
      profile:"./bhargav.jpg",
      messages:[{msg:"hii",time:"10:30 PM"}]
    },
    {
      contactName:"om",
      mobileNo:22222222222,
      profile:"./om.jpg",
      messages:[{msg:"hii",time:"09:10 PM"}]
    }
  ] ,
}
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    
  },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = contactsSlice.actions

export default contactsSlice.reducer