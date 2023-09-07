import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'loginModal',
  initialState: {
    moneyCount: null,
  },
  reducers: {
    setMoneyCount: (state, action) => {
      state.moneyCount = action.payload
    },
  },
})

export const { setMoneyCount } = counterSlice.actions

export default counterSlice.reducer
