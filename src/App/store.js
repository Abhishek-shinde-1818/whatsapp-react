import { configureStore } from '@reduxjs/toolkit'
import contactsReducer from '../Slices/contactsSlice'
import selectedContactReducer from '../Slices/selectedContact'
export const store = configureStore({
  reducer: {
    contacts1: contactsReducer,
    selectedContact:selectedContactReducer
  },
})