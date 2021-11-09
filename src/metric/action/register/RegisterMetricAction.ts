import { MetricName } from "../../domain/MetricName";
import { MetricValue } from "../../domain/MetricValue";
import { MetricCreator } from "./MetricCreator";

export class RegisterMetricAction {
    
    private creator: MetricCreator
    
    constructor(creator: MetricCreator){
        this.creator = creator;
    }

    public execute(name: string, value: number){
        this.creator.create(
            new MetricName(name),
            new MetricValue(value)
        );
    }
}