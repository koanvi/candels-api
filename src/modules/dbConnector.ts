import { Sequelize } from 'sequelize-typescript';
import { Candle  } from "./../models/sequelize/Candle";
  
export const sequelize = new Sequelize({
  database: 'trade_db',
  dialect: 'sqlite',
  username: 'root',
  password: '',
  storage: `${__dirname }/../../localDBs/database.sqlite`,
  models: [Candle],
});

