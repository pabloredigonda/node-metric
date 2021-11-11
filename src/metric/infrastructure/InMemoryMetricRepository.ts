import { Metric } from "../domain/Metric";
import { MetricDatetime } from "../domain/MetricDatetime";
import { MetricName } from "../domain/MetricName";
import { MetricRepository } from "../domain/MetricRepository";
import { MetricSum } from "../domain/MetricSum";
import { MetricValue } from "../domain/MetricValue";

export class InMemoryMetricRepository implements MetricRepository{
    private secondsInOneHour: number = 60 * 60;
    private metrics: Metric[] = [];
    
    save(metric: Metric): void {
        this.metrics.push(metric);
    }

    sum(name: MetricName): MetricSum {

        const now: MetricDatetime    = MetricDatetime.now();
        
        let summary: Metric = this.metrics.reduce((summary: Metric, metric: Metric, index: number) => {
            return this.sumOrRemove(summary, metric, index, now, name);
        });

        return new MetricSum(
            name,
            new MetricValue(Math.round(summary.getValue().getValue()))
        );
    }

    private sumOrRemove(summary: Metric, metric: Metric, index: number, now: MetricDatetime, name: MetricName): Metric
    {
        const inLastSixtyMinutes = this.inLastSixtyMinutes(metric, now);

        if(!inLastSixtyMinutes){
            delete this.metrics[index];
            return summary;
        }

        if(this.sameName(metric, name)){
            summary.getValue().sum(metric.getValue());
        }

        return summary;
    }

    private sameName(metric: Metric, name: MetricName): boolean
    {
        return metric.getName().equal(name);
    }

    private inLastSixtyMinutes(metric: Metric, now: MetricDatetime): boolean
    {
        return now.diffInSeconds(metric.getDatetime()) < this.secondsInOneHour;
    }
}

