import { MetricName } from "../../domain/MetricName";
import { MetricSum } from "../../domain/MetricSum";
import { MetricCalculator } from "./MetricCalculator";

export class SumMetricAction {
    
    private calculator: MetricCalculator
    
    constructor(calculator: MetricCalculator){
        this.calculator = calculator;
    }

    public execute(name: string): MetricSum{
        return this.calculator.sum(
            new MetricName(name)
        );
    }
}