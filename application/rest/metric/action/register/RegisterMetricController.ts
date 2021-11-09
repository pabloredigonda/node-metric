'use strict'
import * as express from 'express';
import { RegisterMetricAction } from '../../../../../src/metric/action/register/RegisterMetricAction';

export class RegisterMetricController{

    private action :RegisterMetricAction;

    public constructor(action: RegisterMetricAction){
        this.action = action;
    }

    execute = (request: express.Request, response: express.Response) => {
        const name  : string = request.params.name;
        const value : number = Math.round(request.body.value);
        this.action.execute(name, value);
        response.send({});
    }
}