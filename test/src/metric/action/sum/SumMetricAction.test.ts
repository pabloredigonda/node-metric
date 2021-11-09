import { MetricRepository } from "../../../../../src/metric/domain/MetricRepository";
import { Mock, It, Times } from "moq.ts";
import { MetricMother } from "../../domain/MetricMother";
import { MetricSumMother } from "../../domain/MetricSumMother";
import { MetricName } from "../../../../../src/metric/domain/MetricName";
import { MetricCalculator } from "../../../../../src/metric/action/sum/MetricCalculator";
import { SumMetricAction } from "../../../../../src/metric/action/sum/SumMetricAction";
import { MetricSum } from "../../../../../src/metric/domain/MetricSum";


describe("Sum Metric action", () => {

    it("should sum a Metric", () => {
        //Given
        const metric1   = MetricMother.example();
        const metric2   = MetricMother.example2();
        const metricSum = MetricSumMother.fromMetrics([metric1, metric2]);
        
        const mock = new Mock<MetricRepository>()
            .setup(instance => instance.sum(It.Is((arg: MetricName) => {
                return arg.equal(metric1.getName())
            })))
            .returns(metricSum);

        const repository  = mock.object();
        const calculator  = new MetricCalculator(repository);
        const action      = new SumMetricAction(calculator);
        
        //When
        const actual: MetricSum = action.execute(
            metric1.getName().getValue()
        );

        //Then
        expect(actual.getName().getValue()).toBe(metricSum.getName().getValue());
        expect(actual.getValue().getValue()).toBe(metricSum.getValue().getValue());
    });
   
  });