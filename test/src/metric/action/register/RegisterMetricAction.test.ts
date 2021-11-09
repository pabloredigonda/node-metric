import { RegisterMetricAction } from "../../../../../src/metric/action/register/RegisterMetricAction";
import { MetricCreator } from "../../../../../src/metric/action/register/MetricCreator";
import { MetricRepository } from "../../../../../src/metric/domain/MetricRepository";
import { Mock, It, Times } from "moq.ts";
import { Metric } from "../../../../../src/metric/domain/Metric";
import { MetricMother } from "../../domain/MetricMother";


describe("Register Metric action", () => {

    it("should register a Metric", () => {
        //Given
        const metric = MetricMother.example();

        const mock = new Mock<MetricRepository>()
        .setup(instance => instance.save(It.Is((arg: Metric) => {
            return arg.getName().equal(metric.getName())
                && arg.getValue().equal(metric.getValue())
                && arg.getDatetime().equal(metric.getDatetime())
        })))
        .returns();

        let repository  = mock.object();
        let creator     = new MetricCreator(repository);
        let action      = new RegisterMetricAction(creator);
        
        //When
        action.execute(
            metric.getName().getValue(),
            metric.getValue().getValue()
        );

        //Then
        mock.verify(instance => {instance.save(It.Is((arg: Metric) => {
            return arg.getName().equal(metric.getName())
                && arg.getValue().equal(metric.getValue())
                && arg.getDatetime().equal(metric.getDatetime())
        }))}, Times.Once());
            
    });
   
  });