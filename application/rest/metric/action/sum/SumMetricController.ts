'use strict'
import * as express from 'express';
import { SumMetricAction } from '../../../../metric/action/sum/SumMetricAction';
import { MetricSum } from '../../../../metric/domain/MetricSum';

export class SumMetricController{

    private action :SumMetricAction;

    public constructor(action: SumMetricAction){
        this.action = action;
    }

    execute = (request: express.Request, response: express.Response) => {
        const name  : string = request.params.name;
        const metricSum: MetricSum = this.action.execute(name);
        response.send({"value": metricSum.getValue().getValue()});
    }
}