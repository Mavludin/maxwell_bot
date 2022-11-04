import axios from 'axios';
import { API_URL } from './AppConfig';

export const getRUBToDollar = async (): Promise<string> => {
  const { data } = await axios.get(API_URL);

  return data.rates.RUB
};
