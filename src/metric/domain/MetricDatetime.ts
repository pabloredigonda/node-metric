export class MetricDatetime {
    private value: Date;

    constructor(value: number) {
        this.value = new Date(value);
    }

    public static now(): MetricDatetime{
        let date = new Date();
        return new MetricDatetime(date.getTime());
    }

    public getValue(): number {
        return this.value.getTime();
    }

    public equal(other: MetricDatetime): boolean {        
        return this.diffInSeconds(other) === 0;
    }

    public diffInSeconds(other: MetricDatetime): number{
        const diffInMs = this.getValue() - other.getValue();
        return Math.floor(diffInMs / 1000);
    }
}