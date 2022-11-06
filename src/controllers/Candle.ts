import { Candle as CandleModel } from "../models/sequelize/Candle";
import { Candle as CandleModelBitfinex } from "../models/bitfinex/Candle";

import { Op } from 'sequelize';

import { Bitfinex } from "./../modules/bitfinex";

export class Candle {

  static import(candle: CandleModelBitfinex) {

    let candleNew = new CandleModel({ ...candle });
    candleNew.save();

  }

  static async get(period?: { startDt: Date, endDt: Date }) {

    let where = {};
    if (period) {
      where = {
        // [Op.and]:
        // MTS: 'My Title',
        MTS: {
          [Op.gt]: period.startDt.getTime(),
          [Op.lt]: period.endDt.getTime(),
        }
      };
    }

    const candles = await CandleModel.findAll({
      where: where,
    });

    return (candles);

  }

  static async fillDB() {
    await Candle.syncForce();
    let api = new Bitfinex();
    //let candles = api.getTestData();
    // Candle.import(candles[0]);
    let candles = await api.getData();

    candles.forEach(candle => {
      Candle.import(candle);
    });

  }

  static async syncForce() {
    await CandleModel.sync({ force: true });
  }

}