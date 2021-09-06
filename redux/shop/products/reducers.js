import { PRODUCTS } from '../../../dummy-data'
import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from './types'

const initialState = {
  loading: true,
  products: PRODUCTS,
  userProducts: PRODUCTS,
  error: null,
}

export const productsReducer = (state = initialState, action) => {
  return state
}
