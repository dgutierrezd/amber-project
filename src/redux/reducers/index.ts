import {StateTypes} from '../../interfaces';
import {
  FETCH_CURRENCIES,
  FETCH_ERROR,
  GET_CURRENCIES,
  GET_CURRENCY_RATES,
} from '../actions/actionTypes';

const initialState: StateTypes = {
  currencies: [],
  selectedCurrency: {},
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENCIES:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_CURRENCIES:
      return {
        ...state,
        currencies: action.payload,
        loading: false,
        error: false,
      };
    case GET_CURRENCY_RATES:
      return {
        ...state,
        selectedCurrency: action.payload,
        loading: false,
        error: false,
      };
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
