import { createSlice} from '@reduxjs/toolkit'

const initialState = {
  searchText:""
}

export const searchTextSlice = createSlice({
  name: 'counter4',
  initialState,
  reducers: {
    handleInputChange: (state,action) => {
        
      state.searchText=action.payload
      
      
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { handleInputChange} = searchTextSlice.actions

export default searchTextSlice.reducer