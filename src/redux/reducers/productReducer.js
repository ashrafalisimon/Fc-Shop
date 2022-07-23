import {ActionTypes} from '../constant/actionType'

const intialState = {
    products: [],
  };

  export const productsReducer = (state = intialState, { type, payload }) => {
    switch (type) {
      case ActionTypes.SET_PRODUCTS:
        return { ...state, products: payload };
      default:
        return state;
    }
  };
  