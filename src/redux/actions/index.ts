import axios from 'axios';
import Config from 'react-native-config';
import {
  FETCH_CURRENCIES,
  FETCH_ERROR,
  GET_CURRENCIES,
  GET_CURRENCY_RATES,
} from './actionTypes';
import {getRandomItems} from '../../utils/random';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {currenciesStorage} from '../../utils/constants';
import {onNotificationSuccess} from '../../utils/haptics';

export const getCurrenciesAction = () => {
  return async dispatch => {
    dispatch({type: FETCH_CURRENCIES});

    try {
      const allCurrencies = await axios.get(
        `${Config.URL_COINBASE_API}currencies`,
      );

      const data = await getRandomItems(allCurrencies.data?.data, 6);

      await AsyncStorage.setItem(currenciesStorage, JSON.stringify(data));

      onNotificationSuccess();
      dispatch({type: GET_CURRENCIES, payload: data});
    } catch (error) {
      const savedCurrencies = await AsyncStorage.getItem(currenciesStorage);
      dispatch({type: GET_CURRENCIES, payload: savedCurrencies});
      dispatch({type: FETCH_ERROR, error});
    }
  };
};

export const getCurrencyRatesAction = (idCurrency: string) => {
  return async dispatch => {
    dispatch({type: FETCH_CURRENCIES});

    try {
      const exchangeRates = await axios.get(
        `${Config.URL_COINBASE_API}exchange-rates?currency=${idCurrency}`,
      );
      const data = await exchangeRates.data?.data;

      dispatch({type: GET_CURRENCY_RATES, payload: data});
    } catch (error) {
      dispatch({type: FETCH_ERROR, error});
    }
  };
};
