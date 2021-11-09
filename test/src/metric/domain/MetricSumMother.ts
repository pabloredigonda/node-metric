import { Metric } from "../../../../src/metric/domain/Metric";
import { MetricDatetime } from "../../../../src/metric/domain/MetricDatetime";
import { MetricName } from "../../../../src/metric/domain/MetricName";
import { MetricSum } from "../../../../src/metric/domain/MetricSum";
import { MetricValue } from "../../../../src/metric/domain/MetricValue";

export class MetricSumMother {
     public static fromMetrics(metrics: any[]): MetricSum {

        let sum = metrics.reduce((accumulator: number, metric: Metric) => accumulator + metric.getValue().getValue());

        return new MetricSum(
            new MetricName("ExampleMetric"),
            new MetricValue(sum)
        );
    }
}