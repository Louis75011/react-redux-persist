import { persistReducer } from 'redux-persist';
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import usersReducer from './usersSlice'

const persistConfig = { key: 'root', storage }

// On combine les reducers pour les passer dans le persistReducer
const reducers = combineReducers({
    users: usersReducer
})

export const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
})