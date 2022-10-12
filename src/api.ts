import axios from 'axios';
import { CURRENCY_TOKEN } from './AppConfig';
import { API_URL } from './constants';

export const getDollar = async () => {
  const response = await axios.get(
    `https://api.currencyapi.com/v3/latest?apikey=${CURRENCY_TOKEN}&base_currency=USD`
  );

  return response.data.data.RUB.value;
};
