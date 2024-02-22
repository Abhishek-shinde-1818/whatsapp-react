import { configureStore} from '@reduxjs/toolkit'
import {createLogger} from "redux-logger"
import contactsReducer from '../Slices/contactsSlice'

import searchTextReducer from '../Slices/searchTextSlice'

const logger = createLogger()

export const store = configureStore({
  reducer: {
    contacts1: contactsReducer,
    searchText:searchTextReducer
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
},
)