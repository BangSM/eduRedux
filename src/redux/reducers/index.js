import { combineReducers } from 'redux';
import { productReducer } from './product'
import { userReducer } from './user'
export const allReducer = combineReducers({
  products : productReducer,
  users : userReducer
})