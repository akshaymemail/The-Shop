import { combineReducers } from 'redux'
import { productsReducer } from './shop/products/reducers'

const reducers = combineReducers({
  products: productsReducer,
})

export default reducers
