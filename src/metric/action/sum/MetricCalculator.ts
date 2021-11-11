import { MetricName } from "../../domain/MetricName";
import { MetricRepository } from "../../domain/MetricRepository";
import { MetricSum } from "../../domain/MetricSum";

export class MetricCalculator{

    private repository: MetricRepository;

    constructor(repository: MetricRepository) {
        this.repository = repository;
    }

    public sum(name: MetricName): MetricSum{
        return this.repository.sum(name);
    }
}