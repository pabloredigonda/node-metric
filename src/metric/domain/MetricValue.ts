export class MetricValue {

    private value: number;

    constructor(value: number) {
        this.value = value;
    }

    public getValue(): number {
        return this.value;
    }

    public equal(other: MetricValue): boolean {
        return this.value === other.getValue();
    }

    public sum(other: MetricValue): this {
        this.value += other.getValue();
        return this;
    }
}