import axios from 'axios';
import { Candle } from './../models/bitfinex/Candle';

export class Bitfinex {

  baseUrl: string = "https://api-pub.bitfinex.com/v2/";
  pathParams: string = "candles/trade:1D:tBTCUSD/hist";
  queryParams: string = `start=${Date.parse('2021-01-01').toString()}&${Date.parse('2022-01-01').toString()}`;

  constructor() { }
  
  getTestData(): Candle[] { 
    
    let candle = new Candle();

    candle.MTS = Date.now();
    candle.OPEN = 1;
    candle.CLOSE = 1;
    candle.HIGH = 1;
    candle.LOW = 1;
    candle.VOLUME = 1;

    return ([candle]);
  }

  async getData(): Promise<Candle[]> {
    try {

      return (await (await axios.get(`${this.baseUrl}/${this.pathParams}?${this.queryParams}`)).data)
        .map((item) => {

          let candle: Candle = new Candle();
          candle.MTS = item[0];
          candle.OPEN = item[1];
          candle.CLOSE = item[2];
          candle.HIGH = item[3];
          candle.LOW = item[4];
          candle.VOLUME = item[5];

          return candle;

        });
    } catch (error: any) {
      console.error(`❎ ${error?.message}`);
      throw (error);
    }

  }

}

