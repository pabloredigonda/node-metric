import { Metric } from "../../../../src/metric/domain/Metric";
import { MetricDatetime } from "../../../../src/metric/domain/MetricDatetime";
import { MetricName } from "../../../../src/metric/domain/MetricName";
import { MetricValue } from "../../../../src/metric/domain/MetricValue";

export class MetricMother {
    public static example(): Metric {
        return new Metric(
            new MetricName("ExampleMetric"),
            new MetricValue(100),
            new MetricDatetime(new Date().getTime())
        );;
    }

    public static example2(): Metric {
        return new Metric(
            new MetricName("ExampleMetric"),
            new MetricValue(200),
            new MetricDatetime(new Date().getTime())
        );;
    }

    public static toOld(): Metric {
        return new Metric(
            new MetricName("ExampleMetric"),
            new MetricValue(200),
            new MetricDatetime(MetricMother.oldDate().getTime())
        );;
    }

    public static example4(): Metric {
        return new Metric(
            new MetricName("ExampleMetric4"),
            new MetricValue(200),
            new MetricDatetime(new Date().getTime())
        );;
    }

    private static oldDate(): Date{
        let date = new Date("2021-11-01 09:00:00");
        date.setHours(date.getHours()-1);
        date.setMinutes(date.getMinutes()-1);
        return date;
    }
}