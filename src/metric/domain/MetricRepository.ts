import { Metric } from "./Metric";
import { MetricName } from "./MetricName";
import { MetricSum } from "./MetricSum";

export interface MetricRepository {
    sum(name: MetricName): MetricSum;
    save(metric: Metric): void;
}