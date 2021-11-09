export class MetricValue {

    private value: number;

    constructor(value: number) {
        this.value = value;
    }

    public getValue(): number {
        return this.value;
    }

    equal(other: MetricValue): boolean {
        return this.value === other.getValue();
    }
}