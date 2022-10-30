import axios from 'axios';

export const getDollar = async () => {
  const { data } = await axios.get('https://cdn.cur.su/api/latest.json');

  return data.rates.RUB
};
