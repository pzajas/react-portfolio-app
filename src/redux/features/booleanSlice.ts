import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface IBoolean {
  isMenuVisible: boolean
}

const initialState = {
  isMenuVisible: false,
}

const slice = createSlice({
  name: 'boolean',
  initialState,
  reducers: {
    setIsMenuVisible: (state, action: PayloadAction<boolean>) => {
      state.isMenuVisible = action.payload
    },
  },
})

export const { setIsMenuVisible } = slice.actions
export default slice.reducer
