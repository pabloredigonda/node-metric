export class MetricName {
    
    private value: string;

    constructor(value: string) {
        this.value = value;
    }

    public getValue(): string {
        return this.value;
    }

    public equal(other: MetricName): boolean {
        return this.value === other.getValue();
    }
}