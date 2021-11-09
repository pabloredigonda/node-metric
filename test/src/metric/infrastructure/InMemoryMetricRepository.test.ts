import { MetricSum } from "../../../../src/metric/domain/MetricSum";
import { InMemoryMetricRepository } from "../../../../src/metric/infrastructure/InMemoryMetricRepository";
import { MetricMother } from "../domain/MetricMother";

describe("InMemoryMetricRepository", () => {

    it("should save a Metric", () => {
        //Given
        const metric        = MetricMother.example();
        const repository    = new InMemoryMetricRepository();
        
        //When
        const result = repository.save(metric);

        //Then
        expect(result).toBeNull
    });

    it("should sum a Metric", () => {
        //Given
        const metric1       = MetricMother.example();
        const metric2       = MetricMother.example2();
        const metric3       = MetricMother.toOld();
        const metric4       = MetricMother.example4();
        const repository    = new InMemoryMetricRepository();
        
        repository.save(metric1);
        repository.save(metric2);
        repository.save(metric3);
        repository.save(metric4);

        //When
        const sum: MetricSum = repository.sum(metric1.getName());

        //Then
        expect(sum.getName().getValue()).toBe(metric2.getName().getValue());
        expect(sum.getValue().getValue()).toBe(300);
    });
   
  });