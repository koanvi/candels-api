import axios from 'axios';
import { Candle } from './../models/bitfinex/Candle';
import "dotenv-defaults/config";

export class Bitfinex {

  baseUrl: string = <string>process.env.BITFINEX_BASEURL;
  pathParams: string = <string>process.env.BITFINEX_PATHPARAMS;
  queryParams: string = `start=${Date.parse('2021-01-01').toString()}&end=${Date.parse('2022-01-01').toString()}`;

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

