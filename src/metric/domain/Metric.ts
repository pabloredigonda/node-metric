import { MetricDatetime } from "./MetricDatetime";
import { MetricName } from "./MetricName";
import { MetricValue } from "./MetricValue";

export class Metric {
    private name        : MetricName;
    private value       : MetricValue;
    private datetime    : MetricDatetime;

    constructor(name: MetricName, value: MetricValue, datetime: MetricDatetime) {
        this.name       = name;
        this.value      = value;
        this.datetime   = datetime;
    }

    public getName(): MetricName {
        return this.name;
    }

    public getValue(): MetricValue {
        return this.value;
    }

    public getDatetime(): MetricDatetime {
        return this.datetime;
    }
}

