import { createSlice } from '@reduxjs/toolkit'

export interface IBoolean {
  isMenuVisible: boolean
}

const initialState = {
  isMenuVisible: true,
}

const slice = createSlice({
  name: 'boolean',
  initialState,
  reducers: {
    setIsMenuVisible: (state, action) => {
      state.isMenuVisible = action.payload
    },
  },
})

export const { setIsMenuVisible } = slice.actions
export default slice.reducer
