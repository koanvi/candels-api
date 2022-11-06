import express, { Express, Request, Response } from 'express';
import * as dotenv from 'dotenv';
import { Candle as CandleController } from "./../controllers/Candle";

export class Server {
  constructor() {

    //req.query
    //req.body
    //req.params

    dotenv.config();

    const app: Express = express();
    const port = process.env.PORT;

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    /**
     * Setting headers
     */
    app.use((req, res, next) => {
      res.header('x-powered-by', 'koanvi')
      res.header('Access-Control-Allow-Origin', process.env.ALLOW_ORIGIN)
      res.header('Access-Control-Allow-Methods', 'GET,POST')
      res.header('Access-Control-Allow-Headers', 'Content-Type')

      next()
    })

    app.get('/candles', async (req: Request, res: Response) => {
      try {

        let period = {
          startDt: Date.parse(<string>req.query.startDt),
          endDt: Date.parse(<string>req.query.endDt)
        };

        if (!period.startDt || !period.endDt) {
          res.status(418).json({ error: 'Укажите период' });
        }


        let candleResult = await CandleController.get({
          startDt: new Date(period.startDt),
          endDt: new Date(period.endDt),
        });

        res.json(candleResult);

      } catch (error) {
        console.error(error);
        res.status(418).json(error);
      }
    });

    app.post('/candles/filldb', async (req: Request, res: Response) => {
      try {
        await CandleController.fillDB();
        res.json({status:"ok"});
      } catch (error) {
        console.error(error);
        res.status(418).json(error);
      }

    });

    app.get('/', async (req: Request, res: Response) => {
      res.status(418).send({ error: 'Нет такого адреса' });
    });

    app.listen(port, () => {
      console.log(`🚀🚀🚀 [server]: Server is running at http://localhost:${port}`);
    });

  }
}

