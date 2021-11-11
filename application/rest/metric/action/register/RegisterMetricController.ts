'use strict'
import * as express from 'express';
import { RegisterMetricAction } from '../../../../../src/metric/action/register/RegisterMetricAction';

export class RegisterMetricController{

    private action :RegisterMetricAction;

    public constructor(action: RegisterMetricAction){
        this.action = action;
    }

    execute = (request: express.Request, response: express.Response) => {
        try{
            this.action.execute(this.name(request), this.value(request));
            response.send({});
        }catch(e: unknown){
            response.send({
                error: {
                    code: 400,
                    message: e instanceof Error ? e.message : ''
                }
            });
        }
    }

    private name(request: express.Request): string
    {
        this.ensureName(request);
        return request.params.name;
    }

    private ensureName(request: express.Request) {
        if (typeof request.params.name != 'string') {
            throw new Error("name is required");
        }
    }

    private value(request: express.Request): number
    {
        this.ensureValue(request);
        let value = new Number(request.body.value);
        this.ensureNumber(value);

        return value.valueOf();
    }

    private ensureNumber(value: Number) {
        if (isNaN(value.valueOf())) {
            throw new Error("value must be a number");
        }
    }

    private ensureValue(request: express.Request) {
        if (request.body.value === undefined) {
            throw new Error("value is required");
        }
    }
}