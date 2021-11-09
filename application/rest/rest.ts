import express from "express"
import * as bodyParser from 'body-parser';
import { RegisterMetricController } from './metric/action/register/RegisterMetricController';
import { DI } from './di';
const port = 3000

export class Rest{

    public app  : express.Application;
    public port : number;
    public di   : DI;

  constructor(port: number) {
    this.app    = express();
    this.port   = port;
    this.di     = new DI();
    
    this.app.use(express.json())    

    this.initializeControllers();
  }
 
  private initializeControllers() {
    this.app.get('/metric/:name/sum', this.di.sumMetricController().execute)
    this.app.post('/metric/:name', this.di.registerMetricController().execute)
  }
 
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}