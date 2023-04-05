import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
        // console.log(action)
        state.push(action.payload)
    },
    deleteUser: (state, action) => {
        state.splice(action.payload, 1)
    },
  },
})

export const { addUser, deleteUser } = usersSlice.actions

export default usersSlice.reducer