import axios from 'axios';
import moment from 'moment';

import { UPDATE_SECURITY } from './types';

const apikey = '9IZZ49XEPIAAKVL7';
const BASE_URL = `https://www.alphavantage.co/query`;


export const fetchLastUpdate = (symbol) => {
  return async (dispatch, getState) => {
    const params = {
      apikey,
      symbol,
      function: 'TIME_SERIES_INTRADAY',
      interval: '15min',
      outputsize: 'compact',
    }
    /** This is a non user triggered action */
    try {
      const response = await axios({
        url: BASE_URL,
        params,
      });

      const time = moment(response.data['Meta Data']['3. Last Refreshed']);
      const tsKey = Object.keys(response.data)[1];
      
      const history = [];
      for (let val in response.data[tsKey]) {
        const row = response.data[tsKey][val];
        const close = parseFloat(row['4. close']);
        history.push(close);
      }

      const payload = {
        ticker: symbol,
        lastUpdate: {
          price: history[history.length - 1],
          time,
        },
        history,
      }

      dispatch({
        type: UPDATE_SECURITY,
        payload,
      });
    } catch (e) {
      console.log(e);
    }
  }  
}