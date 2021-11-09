import { MetricName } from "./MetricName";
import { MetricValue } from "./MetricValue";

export class MetricSum {
    private name        : MetricName;
    private value       : MetricValue;

    constructor(name: MetricName, value: MetricValue) {
        this.name       = name;
        this.value      = value;
    }

    public getName(): MetricName {
        return this.name;
    }

    public getValue(): MetricValue {
        return this.value;
    }
}

