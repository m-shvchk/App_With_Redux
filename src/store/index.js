import { createStore, combineReducers } from '@reduxjs/toolkit'
import uiReducer from './ui-reducer'
import cartReducer from './cart-reducer'

const rootReducer = combineReducers({ui: uiReducer, cart: cartReducer})

const store = createStore(rootReducer)

export default store