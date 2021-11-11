import { Metric } from "../domain/Metric";
import { MetricDatetime } from "../domain/MetricDatetime";
import { MetricName } from "../domain/MetricName";
import { MetricRepository } from "../domain/MetricRepository";
import { MetricSum } from "../domain/MetricSum";
import { MetricValue } from "../domain/MetricValue";

export class InMemoryMetricRepository implements MetricRepository{
    private secondsInOneHourt: number = 60 * 60;
    private metrics: Metric[] = [];
    
    save(metric: Metric): void {
        this.metrics.push(metric);
    }

    sum(name: MetricName): MetricSum {

        const now               : MetricDatetime    = MetricDatetime.now();
        let sum                 : number            = 0;
        
        this.metrics.forEach((metric: Metric) => {
            if( this.shouldBeSum(metric, name, now)){
                sum+=metric.getValue().getValue();
            }
        });

        return new MetricSum(
            name,
            new MetricValue(Math.round(sum))
        );
    }

    private shouldBeSum(metric: Metric, name: MetricName, now: MetricDatetime): boolean
    {
        return this.sameName(metric, name) && this.inLastSixtyMinutes(metric, now);
    }

    private sameName(metric: Metric, name: MetricName): boolean
    {
        return metric.getName().equal(name);
    }

    private inLastSixtyMinutes(metric: Metric, now: MetricDatetime): boolean
    {
        return now.diffInSeconds(metric.getDatetime()) < this.secondsInOneHourt;
    }
}

